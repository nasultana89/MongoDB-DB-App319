const React = require('react');

const DefaultLayout = require('../layout/Default.jsx')

class Edit extends React.Component {
    render() {
        return (
            <DefaultLayout title="Edit Page">
                {/*  prop called Title Edit Page to it  note: comments can't go first or last in  jsx return*/}
                {/* form is not complete  below*/}
                <form action={`/brands/${this.props.brand._id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" defaultValue={this.props.brand.name} /><br />
                    Model: <input type="text" name="model" defaultValue={this.props.brand.model} /><br />
                    Is Ready To Pickup:
                    {this.props.brand.readyForPickup ? <input type="checkbox" name="readyForPickup" defaultChecked /> : <input type="checkbox" name="readyForPickup" />}
                    <br />
                    <input type="submit" value="Submit Changes" />
                </form>
            </DefaultLayout>
        )
    }
}
module.exports = Edit;