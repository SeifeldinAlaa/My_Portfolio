import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    {/* Project 1 */}
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto', height: '290px' }
                    }>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover' }}>
                            React_App
                    </CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</CardText>
                        <a className="mylink" href="https://github.com/SeifeldinAlaa">https://github.com/SeifeldinAlaa</a>

                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >
                    {/* Project 2 */}
                    < Card shadow={5} style={{ minWidth: '450', margin: '80px', height: '290px' }
                    }>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://colorlib.com/wp/wp-content/uploads/sites/2/react-dev-tools-logo.jpg) center / cover' }}>
                            React
                 </CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</CardText>
                        <a className="mylink" href="https://github.com/SeifeldinAlaa">https://github.com/SeifeldinAlaa</a>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >
                    {/* Project 3 */}
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto', height: '290px' }}>
                        <CardTitle style={{ color: 'blue', fontSize: '55px', height: '176px', background: 'url(https://i.ytimg.com/vi/IxuqmfO6p28/maxresdefault.jpg) center / cover' }}>

                            WeatherAppReact
              </CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</CardText>
                        <a className="mylink" href="https://github.com/SeifeldinAlaa">https://github.com/SeifeldinAlaa</a>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >
                    {/* Project 4 */}
                    < Card shadow={5} style={{ minWidth: '450', margin: '80px', height: '290px' }}>
                        <CardTitle style={{ color: 'red', height: '176px', background: 'url(https://pmcvariety.files.wordpress.com/2019/07/stallone-variety-story.jpg?w=1000&h=1333) center / cover', backgroundSize: '140px', backgroundRepeat: 'no-Repeat' }}>
                            React_Image
              </CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</CardText>
                        <a className="mylink" href="https://github.com/SeifeldinAlaa">https://github.com/SeifeldinAlaa</a>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto', height: '290px' }}>
                        <CardTitle style={{ color: 'red', height: '176px', background: 'url(https://miro.medium.com/max/304/1*sRBHJrBFsCR7_CIthJ_R5g.png) center / cover', backgroundSize: '250px' }}>
                            To_Do_List_React
              </CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</CardText>
                        <a className="mylink" href="https://github.com/SeifeldinAlaa">https://github.com/SeifeldinAlaa</a>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >
                </div>

            )
        } else if (this.state.activeTab === 1) {
            return (
                <div style={{ display: 'flex', flexWrap: 'wrap' }}><h1 className="myh1">These are PHP projects</h1>
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto', height: '290px' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://www.dummies.com/wp-content/uploads/413471.image0.jpg) center / cover', backgroundSize: '325px', backgroundRepeat: 'no-repeat' }}>
                            data
              </CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</CardText>
                        <a className="mylink" href="https://github.com/SeifeldinAlaa">https://github.com/SeifeldinAlaa</a>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto', height: '290px' }}>
                        <CardTitle style={{ color: '#FF4500', height: '176px', background: 'url(https://s3.envato.com/files/259495182/screenshorts/04_preview4.png) center / cover', backgroundSize: '325px', backgroundRepeat: 'no-repeat' }}>
                            Admin
              </CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</CardText>
                        <a className="mylink" href="https://github.com/SeifeldinAlaa">https://github.com/SeifeldinAlaa</a>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >
                    < Card shadow={5} style={{ minWidth: '450', margin: '80px', height: '290px' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(data:image/png;base64,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) center / cover', backgroundSize: '360px', backgroundRepeat: 'no-repeat' }}>
                            Laravel
              </CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</CardText>
                        <a className="mylink" href="https://github.com/SeifeldinAlaa">https://github.com/SeifeldinAlaa</a>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto', height: '290px' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://i.stack.imgur.com/4opFy.png) center / cover', backgroundSize: '325px', backgroundRepeat: 'no-repeat' }}>
                            Laravel_TestController
              </CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</CardText>
                        <a className="mylink" href="https://github.com/SeifeldinAlaa">https://github.com/SeifeldinAlaa</a>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto', height: '290px' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://qph.fs.quoracdn.net/main-qimg-f1607edcf4007c8c4aecfa0f1099979c) center / cover', backgroundSize: '175px', backgroundRepeat: 'no-repeat' }}>
                            BackEndProjects
              </CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</CardText>
                        <a className="mylink" href="https://github.com/SeifeldinAlaa">https://github.com/SeifeldinAlaa</a>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto', height: '290px' }}>
                        <CardTitle style={{ color: 'white', height: '176px', background: 'url(https://davidwalsh.name/demo/2019/09/weatherstack-forecast.gif) center / cover', backgroundSize: '300px', backgroundRepeat: 'no-Repeat' }}>
                            WeatherAppApi
              </CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</CardText>
                        <a className="mylink" href="https://github.com/SeifeldinAlaa">https://github.com/SeifeldinAlaa</a>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >

                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div style={{ display: 'flex', flexWrap: 'wrap' }} ><h1 className="myh1">These are HTML and CSS projects</h1>
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto', height: '290px' }
                    }>
                        <CardTitle style={{ color: 'white', height: '176px', background: 'url(https://images.techhive.com/images/article/2016/01/itunes-12-icon-100636927-large.jpg) center / cover', backgroundColor: '#141518', backgroundSize: '200px', backgroundRepeat: 'no-Repeat' }}>
                            Music_App
                        </CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</CardText>
                        <a className="mylink" href="https://github.com/SeifeldinAlaa">https://github.com/SeifeldinAlaa</a>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >

                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto', height: '290px' }
                    }>
                        <CardTitle style={{ color: 'white', height: '176px', background: 'url(https://github.com/SeifeldinAlaa/Front_End_Project_Construction/blob/master/work3.jpg?raw=true) center / cover', backgroundRepeat: 'no-Repeat' }}>
                            <span style={{ fontSize: '20px', position: 'absolute', top: '135px' }}>Front_End_Project_Construction</span>
                        </CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</CardText>
                        <a className="mylink" href="https://github.com/SeifeldinAlaa">https://github.com/SeifeldinAlaa</a>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto', height: '290px' }
                    }>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://yt3.ggpht.com/a/AGF-l78rtYVLMstnA4KVjDgtbp335fO2WLi98y0YDQ=s900-c-k-c0xffffffff-no-rj-mo) center / cover', backgroundSize: '185px', backgroundRepeat: 'no-Repeat' }}>
                            W3_tutorial_template
                 </CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</CardText>
                        <a className="mylink" href="https://github.com/SeifeldinAlaa">https://github.com/SeifeldinAlaa</a>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto', height: '290px' }
                    }>
                        <CardTitle style={{ color: 'white', height: '176px', background: 'url(https://www.intheblack.com/-/media/intheblack/allimages/magazine-2018/12-december/door-person-shadow.jpg?rev=1d17e5989e52483089d1436ddf75ed37) center / cover', backgroundRepeat: 'no-Repeat' }}>
                            Experimental_shadows
                 </CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</CardText>
                        <a className="mylink" href="https://github.com/SeifeldinAlaa">https://github.com/SeifeldinAlaa</a>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >
                    < Card shadow={5} style={{ minWidth: '450', margin: '80px', height: '290px' }
                    }>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2015%2F08%2F15205318%2F101756616.jpg&q=85) center / cover', backgroundRepeat: 'no-Repeat' }}>
                            Colors
                 </CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</CardText>
                        <a className="mylink" href="https://github.com/SeifeldinAlaa">https://github.com/SeifeldinAlaa</a>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto', height: '290px' }
                    }>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://i.stack.imgur.com/VbkCP.png) center / cover', backgroundSize: '250px', backgroundRepeat: 'no-Repeat' }}>
                            Div_task
                 </CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</CardText>
                        <a className="mylink" href="https://github.com/SeifeldinAlaa">https://github.com/SeifeldinAlaa</a>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto', height: '290px' }
                    }>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://cdn5.vectorstock.com/i/1000x1000/09/09/smpte-color-bars-vector-909.jpg) center / cover', backgroundSize: '182px', backgroundRepeat: 'no-Repeat' }}>
                            video_flash
                 </CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</CardText>
                        <a className="mylink" href="https://github.com/SeifeldinAlaa">https://github.com/SeifeldinAlaa</a>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto', height: '290px' }
                    }>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://cdn.shopify.com/s/files/1/0217/3274/products/pau3053_056_h_large.jpg?v=1559687540) center / cover', backgroundSize: '250px', backgroundRepeat: 'no-Repeat' }}>
                            Shoes
                 </CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</CardText>
                        <a className="mylink" href="https://github.com/SeifeldinAlaa">https://github.com/SeifeldinAlaa</a>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto', height: '290px' }
                    }>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://miro.medium.com/max/3171/1*bl-WE2GA4pSwysS47Jju2Q.png) center / cover', backgroundSize: '330px', backgroundRepeat: 'no-Repeat' }}>
                            Header_Sidebar_Footer
                 </CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</CardText>
                        <a className="mylink" href="https://github.com/SeifeldinAlaa">https://github.com/SeifeldinAlaa</a>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto', height: '290px' }
                    }>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://i.stack.imgur.com/CIlkJ.png) center / cover', backgroundSize: '315px', backgroundRepeat: 'no-Repeat' }}>
                            table_row
                 </CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</CardText>
                        <a className="mylink" href="https://github.com/SeifeldinAlaa">https://github.com/SeifeldinAlaa</a>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >
                    < Card shadow={5} style={{ minWidth: '450', margin: '80px', height: '290px' }
                    }>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://images-na.ssl-images-amazon.com/images/I/61vjHf4eZOL._SX466_.jpg) center / cover', backgroundSize: '180px', backgroundRepeat: 'no-Repeat' }}>
                            Letters
                 </CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</CardText>
                        <a className="mylink" href="https://github.com/SeifeldinAlaa">https://github.com/SeifeldinAlaa</a>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto', height: '290px' }
                    }>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://www.tutorialrepublic.com/snippets/designs/simple-registration-form.png) center / cover', backgroundSize: '170px', backgroundRepeat: 'no-Repeat' }}>
                            Registration_Form
                 </CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</CardText>
                        <a className="mylink" href="https://github.com/SeifeldinAlaa">https://github.com/SeifeldinAlaa</a>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto', height: '290px' }
                    }>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://fyf.tac-cdn.net/images/products/small/BF116-11KM.jpg?auto=webp&quality=75) center / cover', backgroundSize: '140px', backgroundRepeat: 'no-Repeat' }}>
                            Flowers
                 </CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</CardText>
                        <a className="mylink" href="https://github.com/SeifeldinAlaa">https://github.com/SeifeldinAlaa</a>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >
                    < Card shadow={5} style={{ minWidth: '450', margin: '80px', height: '290px' }
                    }>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://miro.medium.com/max/2688/1*9HanDsRU11ZMsgDGJwN96w.png) center / cover', backgroundSize: '190px', backgroundRepeat: 'no-Repeat' }}>
                            Bootstrap
                 </CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</CardText>
                        <a className="mylink" href="https://github.com/SeifeldinAlaa">https://github.com/SeifeldinAlaa</a>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto', height: '290px' }
                    }>
                        <CardTitle style={{ color: 'yellow', height: '176px', background: 'url(https://www.usnews.com/dims4/USNEWS/8d602de/2147483647/thumbnail/640x420/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2Fe7%2F39%2F200d98cf4e538f62a25682c75b07%2F171219-teacher-stock.jpg) center / cover', backgroundRepeat: 'no-Repeat' }}>
                            Teachers
                 </CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</CardText>
                        <a className="mylink" href="https://github.com/SeifeldinAlaa">https://github.com/SeifeldinAlaa</a>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto', height: '290px' }
                    }>
                        <CardTitle style={{ color: 'white', height: '176px', background: 'url(https://musicart.xboxlive.com/6/cf96f748-0000-0000-0000-000000000009/504/image.jpg?w=1920&h=1080) center / cover', backgroundRepeat: 'no-Repeat' }}>
                            The_Expendables2_movie
                 </CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</CardText>
                        <a className="mylink" href="https://github.com/SeifeldinAlaa">https://github.com/SeifeldinAlaa</a>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto', height: '290px' }
                    }>
                        <CardTitle style={{ color: 'red', height: '176px', background: 'url(http://i.imgur.com/EPbBKVa.jpg) center / cover', backgroundRepeat: 'no-Repeat' }}>
                            Arabic_Movie
                 </CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</CardText>
                        <a className="mylink" href="https://github.com/SeifeldinAlaa">https://github.com/SeifeldinAlaa</a>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >



                </div>



            )
        }
    }




    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab style={{ fontSize: '20px' }}>React</Tab>
                    <Tab style={{ fontSize: '20px' }}>PHP</Tab>
                    <Tab style={{ fontSize: '20px' }}>HTML/CSS</Tab>
                </Tabs>
                <section className="projects-grid">
                    <Grid>
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>

                </section>
            </div>
        )
    }
}


export default Projects;