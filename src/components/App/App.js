import React, { useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner";
import toast, {Toaster} from 'react-hot-toast';
import APIfetchImages from 'components/Api';
import ImageGallery from "components/ImageGallery";
import Button from "components/Button";
import { Wrapper, Message, Image } from './App.styled'
import Modal from "components/Modal";
import Searchbar from 'components/Searchbar';

export default function App () {
  const[images, setImages] = useState([])
  const[searchQuery, setSearchQuery] = useState('')
  const[page, setPage] = useState(1)
  const[loadMore,  setLoadMore] = useState(true)
  const[loading, setLoading] = useState(false)
  const[error, setError] = useState(null)
  const[showModal, setShowModal] = useState(false)
  const[modalUrl, setModalUrl] = useState('')


  useEffect(() => {
    if (!searchQuery) {
      return;
    } else {
      async function fetchImages() {
        setLoading(true);
        try {
          const response = await APIfetchImages(
            searchQuery,
            page,
          );
          setImages(prevState => [...prevState, ...response.hits]);
          if (!response.total) {
            toast.error(`Nothing found for your request "${searchQuery}"`)
          } else if (response.hits.length<12) {
            setLoadMore(false);
            toast.error(`No more results were found for your search "${searchQuery}"`)
          }
       
        } catch {
          setError(error => error);
          alert('Sorry, change query!');
        } finally {
          setLoading(false);
        }
      }
      fetchImages();
    }
  }, [searchQuery, page]);

  const handleFormSubmit = searchQuery => {
    setPage(1);
    setImages([]);
    setSearchQuery(searchQuery);
    setError(null);
  };

  const handleOnClickMoreButton = () => {
    setPage(prevPage => prevPage + 1
    )
  }

  const toggleModal = ()=> {
    setShowModal(prevState => !prevState
    )
  }

  const openModal = largeImageURL => {
    setModalUrl( largeImageURL);
    toggleModal();
  }

    return (       
      <Wrapper>
        <Searchbar onSubmitForm={handleFormSubmit}/>
          {error && <h1>Change query</h1>}      
          {!searchQuery && <Message>Enter a request</Message>}
          {images && <ImageGallery 
            images={images} 
            onClickImage ={openModal}/>}
          {showModal && (
            <Modal onCloseModal={toggleModal}>
              <Image src={modalUrl} alt='large'></Image>
            </Modal>
          )}
            {loading && <ThreeCircles/>}
          {images.length>0 &&
            (<Button 
              onClick = {handleOnClickMoreButton} 
              onLoadMoreBtn={loadMore} >LoadMore
            </Button>
          )}   
          <Toaster autoClose={3000} />
      </Wrapper>    
      );    
  }


  // const handleChangeInput = (e) => APIfetchImages.setQuery(e.target.value);
  // const handleFormSubmit = async(e) => {
  //   e.preventDefault();
  //   APIfetchImages.resetPAge();
  //   setImages([])
  
  //   const imageArr = await APIfetchImages.getData();
  //   if (imageArr.hits.length) {
  //     setImages(imageArr.hits);
  //     APIfetchImages.increasePage()
  //   }
  //   e.target.reset()
  // }
  // const handleClickMoreButton = async()=> {
  //   const imagesArr = await APIfetchImages.getData();
  //   if (imageArr.hits.length) {
  //     setImages([...images, ...imageArr.hits]);
  //     APIfetchImages.increasePAge()
  //   }
  // }


