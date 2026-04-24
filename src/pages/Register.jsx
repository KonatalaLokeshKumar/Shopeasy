import React from 'react'

const Register = () => {
  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
  <h3>Register</h3>

  <input className="form-control mb-3" placeholder="Name" />
  <input className="form-control mb-3" placeholder="Email" />
  <input className="form-control mb-3" type="password" placeholder="Password" />

  <button className="btn btn-success w-100">Register</button>
</div>
  )
}

export default Register