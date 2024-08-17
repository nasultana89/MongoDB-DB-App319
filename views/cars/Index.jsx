const React = require('react');
const DefaultLayout = require('../layout/Default');
class Index extends React.Component {
    render() {
        const { cars } = this.props;
        return (
            <DefaultLayout title={'Cars Index Page'}>
                <nav>
                    <a href='/cars/new'>Create a New Car</a>
                </nav>
                <ul>
                    {cars.map((car, i) => {
                        return (
                            <li>
                                The {' '}
                                <a href={`/cars/${car._id}`}>
                                    {car.name}
                                </a>
                                {' '}
                                is {car.make} <br />
                                {car.readyToDrive ? `It is ready to drive` : `It is NOT ready to drive`}
                                <br />
                            </li>
                        )
                    })}
                </ul>
            </DefaultLayout>
        )
    }
}
module.exports = Index;

