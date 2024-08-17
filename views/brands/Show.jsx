const React = require('react');
const DefaultLayout = require('../layout/Default');

class Show extends React.Component {
    render () {
        const brand = this.props.brand;

        return (
            <DefaultLayout title='Show an Individual brand'>
                <p>The {brand.name} is {brand.color} </p>
                {brand.readyForPickup ? 'It is ready for pickup' : 'NOT READY'}
                <br />
                <a href={`/brands/${brand._id}/edit`}>Edit this Brand</a>
                <form action={`/brands/${brand._id}?_method=DELETE`} method = "POST">
                    <input type="submit" value="DELETE"/>
                </form>
                <a href='/brands'>Back to Index</a>
            </DefaultLayout>
        )
    }
}

module.exports = Show;