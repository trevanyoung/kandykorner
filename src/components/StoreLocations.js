import React, { Component } from 'react'


class StoreLocations extends Component {
    render() {
        return (
            <section className="storeLocations">
            {
                this.props.stores.map(store =>
                    <div key={store.id}>
                        {store.name}
                    </div>
                )
            }
            </section>
        )
    }
}

export default StoreLocations