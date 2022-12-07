import React, { useState } from 'react'
import './Home.scss'
import Navbar from '../../components/Navbar/Navbar'
import ReactLoading from 'react-loading'
import Modal from 'react-modal'
import { Player } from '@lottiefiles/react-lottie-player'
import { AiFillHeart, AiFillDelete, AiFillCloseCircle } from 'react-icons/ai'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '20px',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
  },
}

const Home = () => {
  const [currentFood, setCurrentFood] = useState([])
  const [randomMode, setRandomMode] = useState(false)
  const [loading, setLoading] = useState(false)
  let subtitle
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const [modalFavoriteIsOpen, setIsFavoriteOpen] = React.useState(false)
  const [foodFavorite, setFoodFavorite] = useState([])
  const [mode, setMode] = useState(true)
  console.log('foodFavorite', foodFavorite)

  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#777'
  }

  function closeModal() {
    setIsOpen(false)
  }
  function openModalFavorite() {
    setIsFavoriteOpen(true)
  }

  function afterOpenModalFavorite() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#777'
  }
  function closeModalFavorite() {
    setIsFavoriteOpen(false)
  }

  //create mock data food items
  const foodItems = [
    {
      id: 1,
      name: 'Pizza',
      price: 15,
      image:
        'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
    {
      id: 2,
      name: 'Burger',
      price: 10,
      image:
        'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80',
    },
    {
      id: 3,
      name: 'Pasta',
      price: 12,
      image:
        'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
    {
      id: 4,
      name: 'Salad',
      price: 8,
      image:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
    {
      id: 5,
      name: 'Sandwich',
      price: 9,
      image:
        'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80',
    },
    {
      id: 6,
      name: 'Fries',
      price: 5,
      image:
        'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80',
    },

    {
      id: 8,
      name: 'Hotdog',
      price: 7,
      image:
        'https://images.unsplash.com/photo-1536521642388-441263f88a61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
    {
      id: 9,
      name: 'Tacos',
      price: 12,
      image:
        'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
    {
      id: 10,
      name: 'Steak',
      price: 25,
      image:
        'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
    {
      id: 11,
      name: 'Chicken',
      price: 15,
      image:
        'https://images.unsplash.com/photo-1587593810167-a84920ea0781?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
    {
      id: 12,
      name: 'Ramen',
      price: 12,
      image:
        'https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
  ]
  //create function random food items
  const randomFoodItems = () => {
    return foodItems[Math.floor(Math.random() * foodItems.length)]
  }
  const handleRandomFood = () => {
    setLoading(true)
    //create delay for random food items 5s
    setTimeout(() => {
      setRandomMode(true)
      setCurrentFood(randomFoodItems())
      setLoading(false)
    }, 4000)
  }
  function handleAddFavorite() {
    if (
      foodFavorite.filter((item) => item.id === currentFood.id).length === 0
    ) {
      setFoodFavorite([...foodFavorite, currentFood])
      console.log('foodFavorite', foodFavorite)
    }
  }
  function handleDeleteFavorite(id) {
    setFoodFavorite(foodFavorite.filter((item) => item.id !== id))
  }
  return (
    <div className="layout">
      <Navbar
        setModal={setIsFavoriteOpen}
        countFavorite={foodFavorite.length}
      />
      <div className="container">
        <div className="content">
          <div className="mode-container">
            <div
              className={mode ? 'mode' : 'mode-notSelect'}
              onClick={() => setMode(true)}
            >
              <span>โหมดสิ้นคิด</span>
            </div>
            <div
              className={mode ? 'mode-notSelect' : 'mode'}
              onClick={() => setMode(false)}
            >
              <span>โหมดจริงจัง</span>
            </div>
          </div>
          <div className="title">กินอะไรดี?</div>
          <div className="subtitle">ให้น้อง AI ช่วยเลือกอาหารที่คุณชอบ</div>
          <div className="show-container">
            {loading ? (
              <div className="loading-container">
                <Player
                  autoplay
                  loop
                  src="https://assets1.lottiefiles.com/temp/lf20_nXwOJj.json"
                  style={{ height: '200px', width: '200px' }}
                />
                <span className="loading-text">
                  รอซักครู่น้า น้องAIกำลังหาอาหารให้คุณ
                </span>
              </div>
            ) : randomMode ? (
              <div className="food-show">
                <img src={currentFood.image} alt="food" className="food-img" />
                <div className="food-name">{currentFood.name}</div>
              </div>
            ) : (
              <Player
                autoplay
                loop
                src="https://assets1.lottiefiles.com/packages/lf20_ysas4vcp.json"
                style={{ height: '300px', width: '300px' }}
              />
            )}
          </div>
          <div>
            {randomMode ? (
              <div className="btn-container">
                <button
                  className={`btn ${loading ? 'btn-disabled' : ''}`}
                  onClick={() => handleAddFavorite(currentFood)}
                  disabled={loading}
                >
                  <AiFillHeart />
                </button>
                <button
                  className={`btn ${loading ? 'btn-disabled' : ''}`}
                  onClick={() => handleRandomFood()}
                  disabled={loading}
                >
                  สุ่มอีกครั้ง
                </button>
                <button
                  className={`btn ${loading ? 'btn-disabled' : ''}`}
                  onClick={() => openModal()}
                  disabled={loading}
                >
                  ดูโภชนาการ
                </button>
              </div>
            ) : (
              <button
                className={`btn ${loading ? 'btn-disabled' : ''}`}
                onClick={() => handleRandomFood()}
                disabled={loading}
              >
                คลิกเพื่อสุ่มอาหาร
              </button>
            )}
          </div>
        </div>
      </div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="modal-container">
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>ข้อมูลโภชนาการ</h2>
            <div className="modal-img">
              <img
                src={currentFood.image}
                alt="food"
                className="food-img-modal"
              />
            </div>
            <div className="modal-text">
              <div className="food-name">{currentFood.name}</div>
              <div className="food-description">แคลอรี่ : 100 กิโลแคลอรี่</div>
              <div className="food-description">โปรตีน : 10 กรัม</div>
              <div className="food-description">ไขมัน : 10 กรัม</div>
              <div className="food-description">คาร์โบไฮเดรต : 10 กรัม</div>
            </div>
            <button className="btn-modal" onClick={() => closeModal()}>
              ปิด
            </button>
          </div>
        </Modal>
        <Modal
          isOpen={modalFavoriteIsOpen}
          onAfterOpen={afterOpenModalFavorite}
          onRequestClose={closeModalFavorite}
          style={customStyles}
        >
          <div className="modal-container">
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>รายการอาหารโปรด</h2>
            {foodFavorite.length === 0 ? (
              <div className="empty-favorite">
                <Player
                  autoplay
                  loop
                  src="https://assets1.lottiefiles.com/private_files/lf30_cgfdhxgx.json"
                  style={{ height: '300px', width: '300px' }}
                />
                <span className="empty-favorite-text">
                  ยังไม่มีรายการอาหารโปรด
                </span>
              </div>
            ) : (
              <div className="modal-favorite">
                {foodFavorite.map((item) => (
                  <div className="favorite-item">
                    <img
                      src={item.image}
                      alt="food"
                      className="favorite-item-img"
                    />
                    <div className="favorite-item-name">{item.name}</div>

                    <AiFillDelete
                      style={{ fontSize: '40px' }}
                      onClick={() => handleDeleteFavorite(item.id)}
                    />
                  </div>
                ))}
              </div>
            )}
            <button
              className="btn-close-favorite"
              onClick={() => closeModalFavorite()}
            >
              <AiFillCloseCircle
                style={{ fontSize: '30px', cursor: 'pointer' }}
              />
            </button>
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default Home
