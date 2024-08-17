const React = require('react');

const DefaultLayout = require('../layout/Default.jsx')

class Edit extends React.Component {
    render() {
        return (
            <DefaultLayout title="Edit Page">
                {/*  prop called Title Edit Page to it  note: comments can't go first or last in  jsx return*/}
                {/* form is not complete  below*/}
                <form action={`/cars/${this.props.car._id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" defaultValue={this.props.car.name} /><br />
                    Make: <input type="text" name="make" defaultValue={this.props.car.make} /><br />
                    Is Ready To Drive:
                    {this.props.car.readyToCar ? <input type="checkbox" name="readyToDrive" defaultChecked /> : <input type="checkbox" name="readyToDrive" />}
                    <br />
                    <input type="submit" value="Submit Changes" />
                </form>
            </DefaultLayout>
        )
    }
}
module.exports = Edit;