
export default function Loading() {
    return (
            <div 
            className=" loading flex justify-center"
            style={{minHeight: "500px", marginTop: "2rem",}}
            >
                <div 
                    className="flex justify-center"
                    style={{height: "300px", width: "300px"}}
                >
                    <h2>Loading...</h2>
                </div>
            </div>
    )
}