import React from "react";
const FormFields = ({ reviewValue, handleReviewChange }) => {
  return (
    <div>
      <div className="field">
        <input
          onChange={handleReviewChange}
          value={reviewValue.title}
          type="text"
          name="title"
          placeholder="Title"
          required
        />
      </div>
      <div className="field">
        <textarea
          onChange={handleReviewChange}
          placeholder="Description"
          name="description"
          value={reviewValue.description}
          style={{ width: "90%", height: "120px" }}
          required
        >
        </textarea>
      </div>
    </div>
  );
};

export default FormFields;
