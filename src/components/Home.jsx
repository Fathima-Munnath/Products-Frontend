import React from 'react'

const Home = () => {
  return (
        <div>
          <section
            style={{
              backgroundImage: "url('https://png.pngtree.com/background/20210710/original/pngtree-shopping-mall-supermarket-selection-merchandise-poster-background-material-picture-image_1048684.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "60vh",
              color: "purple",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Welcome to ShopEasy</h1>
            <p style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>
              Discover the latest trends in dresses
            </p>
            <button
              style={{
                padding: "1rem 2rem",
                fontSize: "1rem",
                backgroundColor: "#FF5722",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Shop Now
            </button>
          </section>
    
          {/* Category Section */}
          <section style={{ padding: "2rem", textAlign: "center" }}>
            <h2 style={{ marginBottom: "2rem" }}>Shop by Category</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "1.5rem",
                flexWrap: "wrap",
              }}
            >
              {["Casual", "Formal", "Ethnic", "Partywear"].map((category) => (
                <div
                  key={category}
                  style={{
                    width: "200px",
                    height: "200px",
                    background: "#f7f7f7",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "#333",
                    cursor: "pointer",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {category}
                </div>
              ))}
            </div>
          </section>
    
          {/* Footer */}
          <footer
            style={{
              backgroundColor: "#333",
              color: "white",
              padding: "1rem",
              textAlign: "center",
              marginTop: "2rem",
            }}
          >
            <p>&copy; 2024 ShopEasy. All rights reserved.</p>
          </footer>
        </div>
      );
    };
    
    
    
  export default Home