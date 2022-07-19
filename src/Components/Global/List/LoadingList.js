import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Avatar, List, Skeleton } from 'antd';

import FunctionButton from '../Buttons/FunctionButton';

function LoadingList(props) {
    const { initLoading, loading, onLoadMore, list, listItemMetaContent } = props;
    return (
        <List
            className="demo-loadmore-list"
            loading={initLoading}
            itemLayout="horizontal"
            loadMore={<FunctionButton
                btnTitle="Load More"
                btnClickFunction={onLoadMore}
                initLoading={initLoading}
                loading={loading}
            />}
            dataSource={list}
            renderItem={(item) => (
                <List.Item
                    actions={[
                        <Link to={'update'} key="list-loadmore-edit">edit</Link>,
                        <Link to={'info'} key="list-loadmore-more">more</Link>,
                    ]}
                >
                    <Skeleton avatar title={false} loading={item.loading} active>
                        <List.Item.Meta
                            avatar={<Avatar src={item.picture.large} />}
                            title={<a href="https://ant.design">{item.name?.last}</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                        <div>{listItemMetaContent}</div>
                    </Skeleton>
                </List.Item>
            )}
        />
    )
}

LoadingList.propTypes = {
    initLoading: PropTypes.bool,
    loading: PropTypes.bool,
    listItemMetaContent: PropTypes.string,
    onLoadMore: PropTypes.func,
    list: PropTypes.array,

}

LoadingList.defaultProps = {
    listItemMetaContent: 'content',
}

export default LoadingList