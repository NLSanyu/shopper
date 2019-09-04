import React from "react"

class AddItem extends React.Component {
  render () {
    return (
        <div className="add-item">
          <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <textarea
                id="textarea1"
                className="materialize-textarea"
                value={props.commentText}
                onChange={props.commentTextChange}
              />
              <label htmlFor="textarea1" className="comment-label">
                {props.textareaLabel}
              </label>
            </div>
          </div>
          <input
            type="submit"
            value={props.inputValue}
            className="btn right"
            onClick={props.handleSubmit}
          />
        </form>
        </div>
    );
  }
}

export default AddItem
