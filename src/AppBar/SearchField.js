const Searchfield = (props) => {
    return(
        <>
        <div
            className={`search-navbar  ${
              !props.showfilter ? "show-search" : "hide-search"
            } ${
                props.hidenavbar ? "just-hide" : ""
              }`}
            type="button"
            onClick={() => {
              props.showfilter ? props.setshowfilter(false) : props.setshowfilter(true);
            }}
          >
            <p className={`search-text`}>Search your Text</p>
            <div className="search-icon-circle">
              <img
                alt="search"
                src="https://img.icons8.com/material-outlined/24/ffffff/search--v1.png"
              />
            </div>
          </div>
        </>
    )
}

export default Searchfield;