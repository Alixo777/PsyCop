### Exam API Documentation

#### Base URL
```
http://api.yourdomain.com/v1/exams
```

#### Endpoints

1. **Create a New Exam**
   - **Endpoint:** `POST /api/exams`
   - **Description:** Creates a new exam with the specified details.
   - **Request Body:**
     ```json
     {
       "title": "Math Exam",
       "description": "An exam covering basic algebra and geometry.",
       "questions": [
         {
           "questionText": "What is 2 + 2?",
           "options": ["2", "3", "4", "5"],
           "correctAnswer": "4"
         },
         {
           "questionText": "What is the area of a rectangle?",
           "options": ["Length x Width", "Length + Width", "Length - Width", "Length / Width"],
           "correctAnswer": "Length x Width"
         }
       ]
     }
     ```
   - **Response:**
     - **Status Code:** 201 Created
     - **Body:**
     ```json
     {
       "id": "exam_id",
       "title": "Math Exam",
       "description": "An exam covering basic algebra and geometry.",
       "questions": [...],
       "createdAt": "2025-03-18T00:00:00Z",
       "updatedAt": "2025-03-18T00:00:00Z"
     }
     ```

2. **Retrieve All Exams**
   - **Endpoint:** `GET /api/exams`
   - **Description:** Retrieves a list of all exams.
   - **Response:**
     - **Status Code:** 200 OK
     - **Body:**
     ```json
     [
       {
         "id": "exam_id",
         "title": "Math Exam",
         "description": "An exam covering basic algebra and geometry.",
         "createdAt": "2025-03-18T00:00:00Z"
       },
       ...
     ]
     ```

3. **Retrieve a Specific Exam**
   - **Endpoint:** `GET /api/exams/:id`
   - **Description:** Retrieves detailed information about a specific exam by its ID.
   - **Response:**
     - **Status Code:** 200 OK
     - **Body:**
     ```json
     {
       "id": "exam_id",
       "title": "Math Exam",
       "description": "An exam covering basic algebra and geometry.",
       "questions": [...],
       "createdAt": "2025-03-18T00:00:00Z",
       "updatedAt": "2025-03-18T00:00:00Z"
     }
     ```

4. **Update an Existing Exam**
   - **Endpoint:** `PUT /api/exams/:id`
   - **Description:** Updates the details of a specific exam.
   - **Request Body:**
     ```json
     {
       "title": "Updated Math Exam",
       "description": "An updated description for the math exam.",
       "questions": [...]
     }
     ```
   - **Response:**
     - **Status Code:** 200 OK
     - **Body:**
     ```json
     {
       "id": "exam_id",
       "title": "Updated Math Exam",
       "description": "An updated description for the math exam.",
       "questions": [...],
       "updatedAt": "2025-03-18T00:00:00Z"
     }
     ```

5. **Delete an Exam**
   - **Endpoint:** `DELETE /api/exams/:id`
   - **Description:** Deletes a specific exam by its ID.
   - **Response:**
     - **Status Code:** 204 No Content
     - **Body:** (Empty)

---

### Error Responses

In case of an error, the API will respond with appropriate status codes and an error message. Here's a standard error response format:

- **Response:**
```json
{
  "error": {
    "code": "INVALID_REQUEST",
    "message": "The request parameters are invalid."
  }
}
```

---

### Notes for Developers
- Ensure to handle authentication (if required) using JWT tokens in the headers.
- Validate input data before sending requests to the API.
- Use appropriate error-handling methods in your application to manage different HTTP status codes.

This documentation provides a foundational overview of the Exam API. Please refer to the versioning and updates section for any changes to these endpoints in the future.

---
