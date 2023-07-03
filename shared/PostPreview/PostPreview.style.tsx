import { styled } from "../../stitches.config";


export const PostPreviewContainer= styled('div',{
    'margin': '1rem 0',
    '@media screen  and (min-width: 400px)':{
        'max-width': '400px',
        'margin': '0 auto',
    },
    
    '@media screen  and (min-width: 800px)':{
        'display': 'flex',
        'max-width': '900px',
        'align-items': 'center',
        'justify-content': 'space-between',
        margin: '60px auto',
    },
    
    'variants':{
        'moveTo':{
            'left':{
                '@media screen  and (min-width: 800px)':{
                    'flex-direction':'row',                    
                }
            },
            'right':{
                '@media screen  and (min-width: 800px)':{
                    'flex-direction':'row-reverse',                    
                }
            },
        }
    }
    
    ,})
    
    
export const PostPreviewContentContainer= styled('div',{
    'text-align': 'center',
    padding:' 0 .6rem',
    'h2':{
        color: '#072563',
    },
    'p':{
        'padding': '.8rem 0',
        'font-size': '.9rem',
        color:'$thickBlue'
        
    },
    'button':{
        width: '40%',
        margin: '0 auto',
    },
    '@media screen  and (min-width: 800px)':{
        width: '50%',
        textAlign: 'left',
        button:{
            margin: 'unset',
        }
    }

})


export const PostPreviewImageContainer= styled('div',{
    position: 'relative',
    backgroundColor:' rgba(20, 167, 229, 0.1)',
    width: '300px',
    height: '280px',
    borderRadius: '10px',
    img:{
    borderRadius: '10px',
        display: 'block',
        width:'100%',
        height: '320px',
        borderRradius:'20px',
        objectFit:'fill',
    },
    '@media screen  and (min-width: 800px)':{
        height: '320px',
        width: '42%',
    },

    'variants':{
        'moveTo':{
            'left':{
                    'marginLeft':'10px',
                    img:{
                    transform: 'translateY(40px) translateX(50px)',
                    },
                '@media screen  and (min-width: 800px)':{
                        marginLeft:'unset',
                            img:{
                                transform: 'translateY(25px) translateX(50px)',
                            },
                    },
            },
            'right':{
                'margin-left':'40px',
                img:{
                    transform: 'translateY(40px) translateX(-40px)',
                },
                '@media screen  and (min-width: 800px)':{
                    marginLeft:'unset',
                        img:{
                            transform: 'translateY(25px) translateX(-40px)',
                        }
                }
            }
        }
    }
})

