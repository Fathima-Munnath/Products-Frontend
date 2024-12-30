import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios' 
import { useNavigate } from 'react-router-dom'

const Login = ({onLogin}) => {
    const {register,handleSubmit,formState:{errors}}=useForm();
    const apiUrl = import.meta.env.VITE_PRODUCTS_API
    const navigate=useNavigate()
    const checkLogin = (data)=>{
        console.log("Form data",data)
        axios.post(`${apiUrl}/login`,data)
        .then(response=>{
            console.log(response.data)
            onLogin()
            navigate(`/products`)
            
            alert("login successful")
        })
        .catch(error=>console.log(error))

    }

    return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "90vh",
            backgroundColor: "#f7f7f7",
          }}
        >
          <div
            style={{
              padding: "2rem",
              borderRadius: "10px",
              backgroundColor: "white",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              maxWidth: "400px",
              width: "100%",
              textAlign: "center",
            }}
          >
            <h2 style={{ marginBottom: "1.5rem", color: "#333" }}>Login Form</h2>
            <form onSubmit={handleSubmit(checkLogin)}>
              <div style={{ marginBottom: "1rem" }}>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Enter email"
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    fontSize: "1rem",
                  }}
                />
              </div>
              <div style={{ marginBottom: "1.5rem" }}>
                <input
                  {...register("password")}
                  type="password"
                  placeholder="Enter password"
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    fontSize: "1rem",
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  backgroundColor: "#4CAF50",
                  color: "white",
                  padding: "0.75rem 1.5rem",
                  border: "none",
                  borderRadius: "5px",
                  fontSize: "1rem",
                  cursor: "pointer",
                }}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      );
}
export default Login