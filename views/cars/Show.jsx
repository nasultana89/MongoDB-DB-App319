const React = require('react');
const DefaultLayout = require('../layout/Default');

class Show extends React.Component {
    render () {
        const car = this.props.car;

        return (
            <DefaultLayout title='Show an Individual Car'>
                <p>The {car.name} is {car.color} </p>
                {car.readyToDrive ? 'It is ready to drive' : 'NOT READY'}
                <br />
                <a href={`/cars/${car._id}/edit`}>Edit this Car</a>
                <form action={`/fruits/${car._id}?_method=DELETE`} method = "POST">
                    <input type="submit" value="DELETE"/>
                </form>
                <a href='/cars'>Back to Index</a>
            </DefaultLayout>
        )
    }
}

module.exports = Show;