import Header from './Header'
export default function Layout({children} : any){
    return (
        
        <div>
            
            <Header></Header>
            {children}
        </div>
  
    )
}