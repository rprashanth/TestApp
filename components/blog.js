import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, ScrollView ,ListView, Dimensions} from 'react-native';
import Comments from './comments'
import Icon from 'react-native-fa-icons';

var {height, width} = Dimensions.get('window');
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});


export default class Blog extends Component {
	constructor(props){
		super(props)
		this.state = {
			comments: false,
		      dataSource: ds.cloneWithRows([1,2,3]),
		      arrayLikes : [],
		      arrayPressed: [],
		      commentsArray : [],
		      innerComments: true,
		      innerCommentsArray : []
    };
	}

	static navigationOptions = {
	    title: 'Blog',
	    headerRight: <Icon name='share-alt' style={{ fontSize: 20, color: '#000000', marginRight:20}} />

  }
  
  componentWillMount(){

		const {state} = this.props.navigation;
		this.state.commentsArray = state.params.data.comments
		var likes = state.params.data.comments
		for(var i = 0;i<likes.length; i++){
			this.state.arrayLikes[i] = likes[i].likes
			this.state.arrayPressed[i] = false
			this.state.innerCommentsArray[i] = false
		}

  }

  innerComments(index){
  	if(index == 0 && this.state.innerComments){
  		this.state.innerCommentsArray[0] = true
  		this.setState({innerComments: false})
  	}
  	else if(index == 0 && !this.state.innerComments){
  		this.state.innerCommentsArray[0] = false
  		this.setState({innerComments: true})
  	}
  }

 increaseLikes(index){
 	if(this.state.arrayPressed[index]){
 		this.state.arrayLikes[index] -= 1 
 		this.state.arrayPressed[index] = false
 	}
 	else{
 		this.state.arrayLikes[index] += 1
 		this.state.arrayPressed[index] = true
 	}

	this.setState({})
 }

  isCloseToBottom(nativeEvent){
  	const paddingToBottom = 20;
  	return nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y >=
    nativeEvent.contentSize.height - paddingToBottom;
    
	};

	render(){
		var liked = <View style={{flexDirection:'row'}}>
								          	<Icon name='heart' style={{ fontSize: 17, color: 'green', marginLeft:5}} />
								          	</View>
		var like = <View style={{flexDirection:'row'}}>
			<Icon name='heart-o' style={{ marginLeft:5,fontSize: 17,}} />
		</View>
		const {state} = this.props.navigation;
		var data = state.params.data.comments
		//alert(Array.isArray(state.params.data.comments))
		var that = this
		that.state.dataSource = ds.cloneWithRows(state.params.data.comments)
		var innerComments = <View style={{padding:6}}>
			{
				[1,2].map(function(item){ // only two inner comments for demo.
					return(
							<View style={{backgroundColor:'white', marginTop:2}}>
								<View style={{padding:5 , backgroundColor:'#ffffff'}}>
								        <Text style={{color:"#123456"}}>Prashanth</Text>
										
									</View>

								    <View style={{padding:5 }}>
								      <Text style={{color:'#000000',lineHeight: 30}}>this is a testing comment cieubcwiu uhfrf fhrfuhref hrughferh rehgreghe hgheurhgegh iheugheiugh bcidsb",</Text>   
								    </View>
								    
								      <View style={{flex:1, width: width, flexDirection:'row', marginTop:5}}>
								     
								      <View style={{flex:0.1}}>
								      	<TouchableHighlight underlayColor="transparent" onPress={()=>that.setState({innerComments:true})}>
								        <Text style={{marginLeft:6}}>3</Text>
								        </TouchableHighlight>
								      </View>

								    </View>

							</View>
						)
				})
			}
		</View>
		return(
			<View style={styles.container}>
				<ScrollView onScroll={({nativeEvent}) => {
      				if (that.isCloseToBottom(nativeEvent)) {
      					that.state.commentsArray.push({
      						by: "Prashanth",
							comment:"this is a testing commeht",
							likes: 4
						})
						that.state.arrayLikes.push(4)
						that.state.arrayPressed.push(false)

        				that.setState({comments: true})

      				}
    			}} style={styles.scrollView}>
					<View >
						<Text style={{fontSize: 20, letterSpacing: 20,fontWeight: '500' ,color: "#000000"}}>{state.params.data.title}</Text>
					</View>
					<View style={{padding:10, flex:1, }}>
						<Text style={{lineHeight:30, fontSize:15, color: "#444444"}}>
							{state.params.data.body}
						</Text>
					</View>
					<View>
							{that.state.comments ? <Text style={{color:"#000000", fontSize:15}}>Comments:</Text> : null }
					</View>
					<View style={{paddingBottom:30}}>
					{ that.state.comments?
						that.state.commentsArray.map(function(item, index){
							return(
								<View style={styles.containerList}>
									<View style={{padding:5 , backgroundColor:'#e5e3e3'}}>
								        <Text style={{color:"#123456"}}>{item.by}</Text>
										
									</View>

								    <View style={{padding:5 , backgroundColor:'#e5e3e3'}}>
								    	<TouchableHighlight underlayColor="transparent" onPress={()=>that.innerComments(index)}>
								      		<Text style={{color:'#000000',lineHeight: 30}}>{item.comment}</Text>
								        </TouchableHighlight>

								    </View>
								    {
								    	that.state.innerCommentsArray[index]?innerComments:null
								    }
								    <View style={{width:width, height:1, flex:0.5, backgroundColor:'black'}}></View>
								    <View style={{flex:1, width: width, flexDirection:'row', marginTop:5}}>
								      
								      <View style={{flex:0.05, marginLeft:5}}>
								        <TouchableHighlight underlayColor="transparent" style={{flex:0.5}} onPress={()=> that.increaseLikes(index)}> 
								          {
								          	that.state.arrayPressed[index]?liked:like
								          }
								        </TouchableHighlight>
								      </View>
								      <View style={{flex:0.1}}>
								      	
								        <Text >{that.state.arrayLikes[index]}</Text>
								      </View>
								      <View style={{flex:0.4, alignItems:'flex-end', marginRight: 28}}>
											<Icon name='bookmark' style={{ fontSize: 17, marginLeft:5}} />
								      </View>

								    </View>
								  </View>
								)
						}): null
					}
					</View>
				</ScrollView>
			</View>
			)
		
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column', 
    backgroundColor:'#ffffff',
    
  },
  containerList:{
 flex: 1,
    marginTop:2,
    // height:150,

    flexDirection: 'column',
    backgroundColor:'#e5e3e3',
    marginBottom:10

  },
  scrollView:{
  	flex:1,
  	flexDirection:'column',
  	padding:10
  },
  title:{
  	flex:1,
  	fontSize:30,
  	color: "#000000"
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});