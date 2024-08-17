const React = require('react');
const DefaultLayout = require('../layout/Default')

class New extends React.Component {
    render () {
        return (
            <DefaultLayout title={'Add a New Car'}>
                {/* NOTE: action will be the route, method will be the HTTP verb */}
                <form action='/cars' method="POST">
                    Name: <input type="text" name="name" /><br />
                    Make: < input type="text" name="make"/> <br />
                    Ready to Drive: <input type="checkbox" name="readyToDrive"/> <br />
                    <input type="submit" name="" value="Create Car"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New;