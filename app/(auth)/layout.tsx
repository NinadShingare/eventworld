const Layout =({ children}: {children: React.ReactNode})=> {
    const mystyle = {
      background: "linear-gradient(90deg, rgba(90,84,214,1) 0%, rgba(193,135,255,1) 100%);",
      };
    return(
        <div className="flex-center min-h-screen w-full bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center" style={mystyle} >
            {children}    
        </div>
    )
}

export default Layout