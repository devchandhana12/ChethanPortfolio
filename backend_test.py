#!/usr/bin/env python3
"""
Backend API Testing for Chethan's Space Portfolio
Tests the contact form APIs with various scenarios
"""

import requests
import json
import sys
from datetime import datetime
import uuid

# Get backend URL from environment
BACKEND_URL = "https://space-dev-folio.preview.emergentagent.com/api"

def test_contact_form_valid_data():
    """Test POST /api/contact with valid data"""
    print("\n=== Testing POST /api/contact with valid data ===")
    
    test_data = {
        "name": "John Doe",
        "email": "john.doe@example.com", 
        "subject": "Portfolio Inquiry",
        "message": "Hi Chethan, I'm interested in discussing a potential project collaboration. Your portfolio looks impressive!"
    }
    
    try:
        response = requests.post(f"{BACKEND_URL}/contact", json=test_data, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            # Verify response structure
            required_fields = ["success", "message", "id"]
            missing_fields = [field for field in required_fields if field not in data]
            
            if missing_fields:
                print(f"❌ FAIL: Missing required fields in response: {missing_fields}")
                return False
            
            if data.get("success") != True:
                print(f"❌ FAIL: Expected success=True, got {data.get('success')}")
                return False
                
            print("✅ PASS: Valid contact form submission successful")
            return True
        else:
            print(f"❌ FAIL: Expected status 200, got {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ FAIL: Request failed - {str(e)}")
        return False

def test_contact_form_invalid_email():
    """Test POST /api/contact with invalid email format"""
    print("\n=== Testing POST /api/contact with invalid email ===")
    
    test_data = {
        "name": "Jane Smith",
        "email": "invalid-email-format",
        "subject": "Test Subject", 
        "message": "This should fail due to invalid email"
    }
    
    try:
        response = requests.post(f"{BACKEND_URL}/contact", json=test_data, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 422:  # FastAPI validation error
            print("✅ PASS: Invalid email properly rejected")
            return True
        else:
            print(f"❌ FAIL: Expected status 422 for invalid email, got {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ FAIL: Request failed - {str(e)}")
        return False

def test_contact_form_missing_fields():
    """Test POST /api/contact with missing required fields"""
    print("\n=== Testing POST /api/contact with missing fields ===")
    
    # Test missing name
    test_data = {
        "email": "test@example.com",
        "subject": "Test Subject",
        "message": "Missing name field"
    }
    
    try:
        response = requests.post(f"{BACKEND_URL}/contact", json=test_data, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 422:  # FastAPI validation error
            print("✅ PASS: Missing required field properly rejected")
            return True
        else:
            print(f"❌ FAIL: Expected status 422 for missing field, got {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ FAIL: Request failed - {str(e)}")
        return False

def test_get_contacts():
    """Test GET /api/contacts to retrieve contact messages"""
    print("\n=== Testing GET /api/contacts ===")
    
    try:
        response = requests.get(f"{BACKEND_URL}/contacts", timeout=10)
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"Retrieved {len(data)} contact messages")
            
            # Verify response is a list
            if not isinstance(data, list):
                print(f"❌ FAIL: Expected list response, got {type(data)}")
                return False
            
            # If there are messages, verify structure
            if data:
                first_message = data[0]
                required_fields = ["id", "name", "email", "subject", "message", "timestamp", "status"]
                missing_fields = [field for field in required_fields if field not in first_message]
                
                if missing_fields:
                    print(f"❌ FAIL: Missing fields in contact message: {missing_fields}")
                    return False
                
                # Verify timestamp ordering (newest first)
                if len(data) > 1:
                    first_timestamp = datetime.fromisoformat(data[0]["timestamp"].replace('Z', '+00:00'))
                    second_timestamp = datetime.fromisoformat(data[1]["timestamp"].replace('Z', '+00:00'))
                    
                    if first_timestamp < second_timestamp:
                        print("❌ FAIL: Messages not sorted by timestamp (newest first)")
                        return False
                
                print("✅ PASS: Contact messages retrieved successfully with correct structure")
            else:
                print("✅ PASS: Contact messages endpoint working (empty list)")
            
            return True
        else:
            print(f"❌ FAIL: Expected status 200, got {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ FAIL: Request failed - {str(e)}")
        return False

def test_contact_data_persistence():
    """Test that contact data is properly stored and retrievable"""
    print("\n=== Testing contact data persistence ===")
    
    # Create a unique test message
    unique_id = str(uuid.uuid4())[:8]
    test_data = {
        "name": f"Test User {unique_id}",
        "email": f"test{unique_id}@example.com",
        "subject": f"Test Subject {unique_id}",
        "message": f"This is a test message for persistence verification {unique_id}"
    }
    
    try:
        # Submit contact form
        post_response = requests.post(f"{BACKEND_URL}/contact", json=test_data, timeout=10)
        
        if post_response.status_code != 200:
            print(f"❌ FAIL: Failed to submit test message: {post_response.status_code}")
            return False
        
        post_data = post_response.json()
        message_id = post_data.get("id")
        
        # Retrieve contacts and verify our message exists
        get_response = requests.get(f"{BACKEND_URL}/contacts", timeout=10)
        
        if get_response.status_code != 200:
            print(f"❌ FAIL: Failed to retrieve contacts: {get_response.status_code}")
            return False
        
        contacts = get_response.json()
        
        # Find our test message
        found_message = None
        for contact in contacts:
            if contact.get("id") == message_id:
                found_message = contact
                break
        
        if not found_message:
            print(f"❌ FAIL: Submitted message with ID {message_id} not found in contacts")
            return False
        
        # Verify data integrity
        if (found_message["name"] == test_data["name"] and
            found_message["email"] == test_data["email"] and
            found_message["subject"] == test_data["subject"] and
            found_message["message"] == test_data["message"] and
            found_message["status"] == "new"):
            
            print("✅ PASS: Contact data properly stored and retrievable")
            return True
        else:
            print("❌ FAIL: Retrieved data doesn't match submitted data")
            print(f"Expected: {test_data}")
            print(f"Found: {found_message}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ FAIL: Request failed - {str(e)}")
        return False

def run_all_tests():
    """Run all backend API tests"""
    print("🚀 Starting Backend API Tests for Chethan's Space Portfolio")
    print(f"Testing against: {BACKEND_URL}")
    
    tests = [
        test_contact_form_valid_data,
        test_contact_form_invalid_email,
        test_contact_form_missing_fields,
        test_get_contacts,
        test_contact_data_persistence
    ]
    
    passed = 0
    failed = 0
    
    for test in tests:
        try:
            if test():
                passed += 1
            else:
                failed += 1
        except Exception as e:
            print(f"❌ FAIL: Test {test.__name__} crashed - {str(e)}")
            failed += 1
    
    print(f"\n📊 Test Results:")
    print(f"✅ Passed: {passed}")
    print(f"❌ Failed: {failed}")
    print(f"📈 Success Rate: {(passed/(passed+failed)*100):.1f}%")
    
    return failed == 0

if __name__ == "__main__":
    success = run_all_tests()
    sys.exit(0 if success else 1)