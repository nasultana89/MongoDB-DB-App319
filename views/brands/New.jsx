const React = require('react');
const DefaultLayout = require('../layout/Default')

class New extends React.Component {
    render () {
        return (
            <DefaultLayout title={'Add a New Brand'}>
                {/* NOTE: action will be the route, method will be the HTTP verb */}
                <form action='/brands' method="POST">
                    Name: <input type="text" name="name" /><br />
                    Model: < input type="text" name="model"/> <br />
                    Ready for Pickup: <input type="checkbox" name="readyForPickup"/> <br />
                    <input type="submit" name="" value="Create Brand"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New;