import React, { Component } from 'react'


class CandyList extends Component {
    render() {
        return (
            <section className="candyList">
            {
                this.props.candies.map(candy =>
                    <div>
                        <div>{candy.name}</div>
                        <div>{this.props.candyTypes.find(
                            ct => ct.id === candy.typeId
                        ).name}</div>
                        <button onClick={() => {
                                this.props.deleteCandy(candy.id)}
                            }
                            >Delete</button>
                    </div>
                )

            }
            </section>
        )
    }
}

export default CandyList
// {`candy-${candy.id}`}
