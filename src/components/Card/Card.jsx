import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav,removeFav } from "../../redux/actions";
import { useState, useEffect} from "react";
import { connect } from "react-redux";
// import { mapDispatchToProps, mapStateToProps } from "react-redux";
//Trae todas las propiedades que tendra cada una de las cards en cada llamado

function Card ({onClose,name,species,origin,image,id, addFav, removeFav, myFavorites}) {
  

  const [isFav , setIsFav] = useState(false)

  const handleFavorite= () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({name,species,origin,image});
    }  
  }

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavorites, id]);


  return (
    <div className={`${style.container} ${style.cardBody}`}>
      <button onClick={handleFavorite}>{isFav ? '❤️':'🤍'}</button>
      <button onClick={onClose}>X</button>
      <div className={style.texts}>
        <Link to={`/detail/${id}`}>
          <h2 className={style.name}>{name}</h2>
        </Link>
        <h2>{species}</h2>
        <h2>{origin}</h2>
      </div>
      <img className={style.image} src={image} alt="" />
    </div>
  );

}

const mapStateToProps = (state)=>{
  return {
    myFavorites: state.myFavorites

  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    addFav: (character) => {dispatch(addFav(character))},
    removeFav: (id) => {dispatch(removeFav(id))}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card)