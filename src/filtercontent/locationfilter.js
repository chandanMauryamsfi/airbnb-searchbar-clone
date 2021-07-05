import "../filtercontent/locationfilter.css";

const LocationFilter = (props) => {
    if (props.showlocationfilter){
        return(
            <>
            <div className="filterboxdropdown">
                <p>Go Anywhere , Anytime</p>
                <div className="filterboxalllocation">
                    <p>i'm flexible</p>
                    <img className="flexibleSearchArrow" alt="searcharrow" src="https://img.icons8.com/ios-filled/50/4a90e2/expand-arrow--v1.png"/>
                </div>
            </div>
            </>
        )
    }
    else{
        return(
            <>
            </>
        )
    }
    
};

export default LocationFilter;
