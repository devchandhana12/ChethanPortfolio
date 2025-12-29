# API Contracts & Integration Plan

## Overview
Backend APIs for Chethan's Space Portfolio - Contact form submission and data persistence.

## Current Mock Data (frontend/src/data/mock.js)
- `personalInfo`: User profile data (static - no backend needed)
- `skills`: Tech stack categories (static - no backend needed)
- `projects`: Portfolio projects (static - no backend needed)
- `experience`: Work history (static - no backend needed)
- `testimonials`: Client testimonials (static - no backend needed)

## Backend Implementation Required

### 1. Contact Form Submission API

**Endpoint:** `POST /api/contact`

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "string"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully",
  "id": "contact_id"
}
```

**MongoDB Collection:** `contacts`

**Schema:**
```python
{
  "id": "uuid",
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "string",
  "timestamp": "datetime",
  "status": "string (new/read/archived)"
}
```

### 2. Get Contact Messages (Optional Admin)

**Endpoint:** `GET /api/contacts`

**Response:**
```json
{
  "contacts": [
    {
      "id": "uuid",
      "name": "string",
      "email": "string",
      "subject": "string",
      "message": "string",
      "timestamp": "datetime",
      "status": "string"
    }
  ]
}
```

## Frontend Integration

### Contact Component Changes
**File:** `/app/frontend/src/components/Contact.jsx`

**Current Mock Implementation:**
```javascript
const handleSubmit = (e) => {
  e.preventDefault();
  toast({ title: "Message Sent!", description: "..." });
  setFormData({ name: '', email: '', subject: '', message: '' });
};
```

**Updated Implementation:**
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post(`${BACKEND_URL}/api/contact`, formData);
    toast({ title: "Message Sent!", description: response.data.message });
    setFormData({ name: '', email: '', subject: '', message: '' });
  } catch (error) {
    toast({ 
      title: "Error", 
      description: "Failed to send message. Please try again.",
      variant: "destructive"
    });
  }
};
```

## Implementation Steps

1. **Backend:**
   - Create contact model with Pydantic
   - Implement POST /api/contact endpoint
   - Add email validation
   - Store in MongoDB contacts collection
   - Add basic error handling

2. **Frontend:**
   - Import axios and BACKEND_URL in Contact.jsx
   - Update handleSubmit to call backend API
   - Add loading state during submission
   - Handle error responses with toast

## Notes
- All other data (projects, experience, skills) remains static in mock.js
- Contact form is the only interactive feature requiring backend
- Simple implementation - no authentication needed
- Email notifications can be added later if needed
