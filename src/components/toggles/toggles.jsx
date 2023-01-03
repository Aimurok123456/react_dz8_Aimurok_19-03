import styles from './toggles.module.css'
import React from 'react';

class Toggles extends React.Component {
    constructor() {
        super()
        this.state = {
            showText: true,
            selected: 'yes'
        }
        this.handleCheck = this.handleCheck.bind(this)
    }

    handleCheck(e) {
        this.setState({selected: e.target.value})
    }

    render() {
        return (
            <div className={styles.container}>
                <div>
                    <button onClick={(e) => setShowText(!this.state.showText)}>Скрыть текст</button>
                    { this.state.showText ? 
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus minima ipsam magnam consequatur! Dolorum quas laboriosam, inventore optio voluptas eos.</p> 
                        : null }
                </div>
                <div>
                    <div className={styles.question}>
                        <span>Вы уверены что хотите закончить курсы?</span>
                        <input
                            type="radio"
                            id="yes"
                            name="choose"
                            value="yes"
                            checked={this.state.selected === 'yes'}
                            onChange={this.handleCheck}
                        />
                        <label htmlFor="yes">Yes</label>

                        <input
                            type="radio"
                            id="no"
                            name="choose"
                            value="no"
                            checked={this.state.selected === 'no'}
                            onChange={this.handleCheck}
                        />
                        <label htmlFor="no">No</label>

                        <input
                            type="radio"
                            id="maybe"
                            name="choose"
                            value="maybe"
                            checked={this.state.selected === 'maybe'}
                            onChange={this.handleCheck}
                        />
                        <label htmlFor="maybe">Maybe</label>
                    </div>
                </div>
            </div>

    )}
}

export default Toggles;