import coffee from "./coffeeItem";

const CoffeeList = (coffeeArr) => {
    return <div>
                <ul id="coffeeList">{
                    coffeeArr.ListArray.map(name => {
                        return coffee(name)
                    })
                }</ul>
            </div>
}
export default CoffeeList;