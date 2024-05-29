"use client";

import { func } from "prop-types";

function RegisterForm({ registerAction }) {

  /**
   * @param {SubmitEvent} event 
   */
  async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const username = formData.get("username");
    const password = formData.get("password");

    const response = await registerAction(username, password);

    // This will log the JSON response from the server in the browser, but will log `undefined` when mocked with cypress
    console.log({ response })
  }

  return (
    <form method="POST" onSubmit={onSubmit}>
      <fieldset>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
      </fieldset>
      <fieldset>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
      </fieldset>
      <fieldset>
        <button type="submit">Register</button>
      </fieldset>
    </form>
  )
}

RegisterForm.propTypes = {
  registerAction: func.isRequired,
}

export default RegisterForm;