import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';
import CartItem from './CartItem';
import AboutUs from './AboutUs';

function ProductList({ onHomeClick, initialSection = 'plants' }) {
    const [showCart, setShowCart] = useState(false);
    const [showAboutUs, setShowAboutUs] = useState(initialSection === 'about');
    const [addedToCart, setAddedToCart] = useState({});

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.items);

    // Keep state in sync with initialSection when prop updates
    useEffect(() => {
        if (initialSection === 'about') {
            setShowAboutUs(true);
            setShowCart(false);
        } else if (initialSection === 'plants') {
            setShowAboutUs(false);
            setShowCart(false);
        }
    }, [initialSection]);

    // Keep addedToCart synced with the Redux cart items
    useEffect(() => {
        const newAdded = {};
        cart.forEach((item) => {
            newAdded[item.name] = true;
        });
        setAddedToCart(newAdded);
    }, [cart]);

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                {
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Produces oxygen at night, improving indoor air quality.",
                    cost: "$15"
                },
                {
                    name: "Spider Plant",
                    image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
                    description: "Filters formaldehyde and xylene from indoor air.",
                    cost: "$12"
                },
                {
                    name: "Peace Lily",
                    image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
                    description: "Removes mold spores and toxins while purifying the air.",
                    cost: "$18"
                },
                {
                    name: "Boston Fern",
                    image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
                    description: "Adds humidity to the room and eliminates airborne toxins.",
                    cost: "$20"
                },
                {
                    name: "Rubber Plant",
                    image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
                    description: "Easy to maintain and highly effective at absorbing pollutants.",
                    cost: "$17"
                },
                {
                    name: "English Ivy",
                    image: "https://cdn.pixabay.com/photo/2017/08/07/17/07/ivy-2605809_1280.jpg",
                    description: "Classic climber that purifies the air from airborne toxins.",
                    cost: "$14"
                }
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                {
                    name: "Lavender",
                    image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Calming scent widely celebrated and used in aromatherapy.",
                    cost: "$20"
                },
                {
                    name: "Jasmine",
                    image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Sweet exotic fragrance that promotes calm and relaxation.",
                    cost: "$18"
                },
                {
                    name: "Rosemary",
                    image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
                    description: "Invigorating woody aroma, popular in cooking and herbal tea.",
                    cost: "$15"
                },
                {
                    name: "Mint",
                    image: "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg",
                    description: "Crisp refreshing aroma, delicious in drinks and culinary dishes.",
                    cost: "$12"
                },
                {
                    name: "Lemon Balm",
                    image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
                    description: "Citrusy scent that relieves everyday stress and boosts mood.",
                    cost: "$14"
                },
                {
                    name: "Hyacinth",
                    image: "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg",
                    description: "Stunning spring flowers renowned for rich intoxicating fragrance.",
                    cost: "$22"
                }
            ]
        },
        {
            category: "Insect Repellent Plants",
            plants: [
                {
                    name: "Oregano",
                    image: "https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg",
                    description: "Contains essential natural oils that deter pesky garden insects.",
                    cost: "$10"
                },
                {
                    name: "Marigold",
                    image: "https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg",
                    description: "Natural insect deterrent that adds a vibrant splash of golden color.",
                    cost: "$8"
                },
                {
                    name: "Geraniums",
                    image: "https://cdn.pixabay.com/photo/2012/04/26/21/51/flowerpot-43270_1280.jpg",
                    description: "Pleasant citrus floral aroma known to repel mosquitoes and bugs.",
                    cost: "$20"
                },
                {
                    name: "Basil",
                    image: "https://cdn.pixabay.com/photo/2016/07/24/20/48/tulsi-1539181_1280.jpg",
                    description: "Repels flies and mosquitoes while providing fresh kitchen herbs.",
                    cost: "$9"
                },
                {
                    name: "Citronella",
                    image: "https://cdn.pixabay.com/photo/2018/06/10/17/39/geranium-3466914_1280.jpg",
                    description: "Famous mosquito repellent with a delightful lemon-like aroma.",
                    cost: "$15"
                },
                {
                    name: "Catnip",
                    image: "https://cdn.pixabay.com/photo/2015/07/02/21/55/cat-829681_1280.jpg",
                    description: "Potent natural mosquito repelling herb that felines adore.",
                    cost: "$13"
                }
            ]
        },
        {
            category: "Medicinal Plants",
            plants: [
                {
                    name: "Aloe Vera",
                    image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
                    description: "Soothing natural gel used widely for burns and skincare.",
                    cost: "$14"
                },
                {
                    name: "Echinacea",
                    image: "https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg",
                    description: "Boosts immune resilience and assists with cold prevention.",
                    cost: "$16"
                },
                {
                    name: "Peppermint",
                    image: "https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg",
                    description: "Eases digestive discomfort and helps relieve tension headaches.",
                    cost: "$13"
                },
                {
                    name: "Eucalyptus",
                    image: "https://cdn.pixabay.com/photo/2016/08/04/10/43/eucalyptus-1568853_1280.jpg",
                    description: "Aromatic leaves that clear respiratory pathways and soothe colds.",
                    cost: "$16"
                },
                {
                    name: "Chamomile",
                    image: "https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg",
                    description: "Gentle daisies that ease restlessness and promote sound sleep.",
                    cost: "$15"
                },
                {
                    name: "Calendula",
                    image: "https://cdn.pixabay.com/photo/2019/07/15/18/28/flowers-4340127_1280.jpg",
                    description: "Heals skin irritations and promotes quick, soothing relief.",
                    cost: "$12"
                }
            ]
        },
        {
            category: "Low Maintenance Plants",
            plants: [
                {
                    name: "ZZ Plant",
                    image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Thrives in low light conditions and requires minimal watering.",
                    cost: "$25"
                },
                {
                    name: "Pothos",
                    image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg",
                    description: "Hardy, trailing vine that flourishes under diverse lighting.",
                    cost: "$10"
                },
                {
                    name: "Jade Plant",
                    image: "https://cdn.pixabay.com/photo/2016/11/29/03/42/succulent-1867108_1280.jpg",
                    description: "Resilient succulent symbolizing good luck with thick glossy leaves.",
                    cost: "$15"
                },
                {
                    name: "Cast Iron Plant",
                    image: "https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg",
                    description: "Practically indestructible plant that thrives even in dark corners.",
                    cost: "$20"
                },
                {
                    name: "Succulents",
                    image: "https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg",
                    description: "Drought-hardy varieties offering striking textures and shapes.",
                    cost: "$18"
                },
                {
                    name: "Aglaonema",
                    image: "https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg",
                    description: "Tolerates dry air and irregular watering with lush patterned leaves.",
                    cost: "$22"
                }
            ]
        }
    ];

    const styleObj = {
        backgroundColor: '#4CAF50',
        color: '#fff!important',
        padding: '15px 30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '20px',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)',
    };

    const styleObjUl = {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: '40px',
    };

    const styleA = {
        color: 'white',
        fontSize: '24px',
        textDecoration: 'none',
        cursor: 'pointer',
        fontWeight: '500',
        transition: 'opacity 0.2s ease',
    };

    const handleHomeClick = (e) => {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        setShowAboutUs(false);
        setShowCart(false);
        onHomeClick();
    };

    const handlePlantsClick = (e) => {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        setShowAboutUs(false);
        setShowCart(false);
    };

    const handleAboutUsClick = (e) => {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        setShowAboutUs(true);
        setShowCart(false);
    };

    const handleCartClick = (e) => {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        setShowAboutUs(false);
        setShowCart(true);
    };

    const handleContinueShopping = (e) => {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        setShowAboutUs(false);
        setShowCart(false);
    };

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
        setAddedToCart((prevState) => ({
            ...prevState,
            [plant.name]: true,
        }));
    };

    const calculateTotalQuantity = () => {
        return cart ? cart.reduce((total, item) => total + item.quantity, 0) : 0;
    };

    return (
        <div>
            <div className="navbar" style={styleObj}>
                <div className="tag">
                    <div className="luxury">
                        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="Logo" />
                        <a href="/" onClick={(e) => handleHomeClick(e)}>
                            <div>
                                <h3 style={{ color: 'white', margin: 0 }}>Paradise Nursery</h3>
                                <i style={{ color: '#e8f5e9', fontSize: '14px' }}>Where Green Meets Serenity</i>
                            </div>
                        </a>
                    </div>
                </div>
                <div style={styleObjUl}>
                    <div>
                        <a href="#" onClick={(e) => handleHomeClick(e)} style={styleA}>Home</a>
                    </div>
                    <div>
                        <a 
                            href="#" 
                            onClick={(e) => handlePlantsClick(e)} 
                            style={{ ...styleA, textDecoration: (!showCart && !showAboutUs) ? 'underline' : 'none' }}
                        >
                            Plants
                        </a>
                    </div>
                    <div>
                        <a 
                            href="#" 
                            onClick={(e) => handleAboutUsClick(e)} 
                            style={{ ...styleA, textDecoration: showAboutUs ? 'underline' : 'none' }}
                        >
                            About Us
                        </a>
                    </div>
                    <div>
                        <a href="#" onClick={(e) => handleCartClick(e)} style={styleA}>
                            <h1 className="cart" style={{ margin: 0 }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68">
                                    <rect width="156" height="156" fill="none"></rect>
                                    <circle cx="80" cy="216" r="12"></circle>
                                    <circle cx="184" cy="216" r="12"></circle>
                                    <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" id="mainIconPathAttribute"></path>
                                </svg>
                                <span className="cart_quantity_count">{calculateTotalQuantity()}</span>
                            </h1>
                        </a>
                    </div>
                </div>
            </div>

            {showCart ? (
                <CartItem onContinueShopping={handleContinueShopping} />
            ) : showAboutUs ? (
                <AboutUs onStartShopping={handlePlantsClick} />
            ) : (
                <div className="product-grid">
                    {plantsArray.map((category, index) => (
                        <div key={index} className="category-section" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div className="plantname_heading">
                                <div className="plant_heading">
                                    <h1>{category.category}</h1>
                                </div>
                            </div>
                            <div className="product-list">
                                {category.plants.map((plant, plantIndex) => (
                                    <div className="product-card" key={plantIndex}>
                                        <img className="product-image" src={plant.image} alt={plant.name} />
                                        <div className="product-title">{plant.name}</div>
                                        <div className="product-description" style={{ color: '#555', fontStyle: 'italic', marginBottom: '10px' }}>
                                            {plant.description}
                                        </div>
                                        <div className="product-price">{plant.cost}</div>
                                        <button
                                            className={`product-button ${addedToCart[plant.name] ? 'added-to-cart' : ''}`}
                                            onClick={() => handleAddToCart(plant)}
                                            disabled={!!addedToCart[plant.name]}
                                        >
                                            {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ProductList;
