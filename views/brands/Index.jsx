const React = require('react');
const DefaultLayout = require('../layout/Default');
class Index extends React.Component {
    render() {
        const { brands } = this.props;
        return (
            <DefaultLayout title={'Brands Index Page'}>
                <nav>
                    <a href='/brands/new'>Create a New Brand</a>
                </nav>
                <ul>
                    {brands.map((brand, i) => {
                        return (
                            <li>
                                The {' '}
                                <a href={`/brands/${brand._id}`}>
                                    {brand.name}
                                </a>
                                {' '}
                                is {brand.make} <br />
                                {brand.readyForPickup ? `It is ready For Pickup` : `It is NOT ready For Pickup`}
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

