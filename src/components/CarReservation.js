export const CarDetails = () => {
    const { carId } = useParams();
    const dispatch = useDispatch();
    const cars = useSelector((state) => state.cars.cars);
  
    useEffect(() => {
      dispatch(getCars());
    }, [dispatch]);
  
    if (!cars) {
      return <div>Loading...</div>;
    }
  
    const car = cars.find((car) => car.id.toString() === carId.toString());
  
    if (!car) {
      return <div>Car not found.</div>;
    }
  
    return (
      <div className="mainContainer">
        <div>
          <Navbar />
        </div>
        <div>
          <h2>Car Details</h2>
          <img className="carImage" src={car.image} alt={car.name} />
          <p>
            Name:
            {car.name}
          </p>
  
          <p>
            Model:
            {car.model}
          </p>
          <p>
            Price:
            {car.price}
            $
          </p>
          <Link to="/car/$car.id}/reserve">
            <button type="button" className="car-details-button"> Reserve</button>
          </Link>
        </div>
      </div>
    );
  };
  
  export default CarDetails;