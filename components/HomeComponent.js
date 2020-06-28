import React from 'react';
import NewsComponent from './NewsComponent';
import { ScrollView, View,RefreshControl } from 'react-native';
import HeaderComponent from './HeaderComponent';
import StatusComponent from './StatusComponent';

function wait(timeout) {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
}

function HomeComponent(){
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);
        return(
            <ScrollView stickyHeaderIndices={[0]} style={{backgroundColor:"#ffffff"}}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <View>
                    <HeaderComponent/>
                </View>
                <View>
                    <StatusComponent/>
                </View>
                <View>
                    <NewsComponent/>
                </View>
            </ScrollView>
        );
}

export default HomeComponent;
