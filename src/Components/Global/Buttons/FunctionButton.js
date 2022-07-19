import React from 'react'
import PropTypes from 'prop-types';
import { Button } from 'antd';

function FunctionButton(props) {
    const { initLoading, loading, btnClickFunction, btnTitle } = props;
    return (
        !initLoading && !loading ? (
            <div
                style={{
                    textAlign: "center",
                    marginTop: 12,
                    height: 32,
                    lineHeight: "32px",
                }}
            >
                <Button onClick={btnClickFunction}>{btnTitle}</Button>
            </div>
        ) : null
    )
}

FunctionButton.propTypes = {
    initLoading: PropTypes.bool,
    loading: PropTypes.bool,
    btnClickFunction: PropTypes.func,
    btnTitle: PropTypes.string,
};

export default FunctionButton