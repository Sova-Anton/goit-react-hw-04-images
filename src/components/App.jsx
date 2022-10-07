import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../components/Loader/Loader';
import {ImageGallery} from './ImageGallery/ImageGallery';
import { getImages } from 'api/api';
import Searchbar from './Searchbar';

export class App extends Component {
  state = {
    items: [],
    loading: false,
    error: null,
    page: 1,
    searchImages: '',
  };



  componentDidUpdate(_, prevState) {
    const { page } = this.state;
    if (prevState.page !== page) {
      this.fetchImages();
    }
  }

  async fetchImages() {
    const { page } = this.state;
    this.setState({
      loading: true,
    });

    try {
      const { hits } = await getImages(page);
      this.setState(({ items }) => {
        return {
          items: [...items, ...hits],
        };
      });
    } catch (error) {
      this.setState({error})
    } finally {
      this.setState({ loading: false });
    }
  }
/*Получаем значения из компонента Searcbar */
  handleFormSubmit = (searchImages) => {
this.setState({searchImages})
  }

  render() {
    const { loading, items, error } = this.state;
    const { handleFormSubmit } = this;
    return (
      <>
        
        <Searchbar onSubmit={handleFormSubmit} />
        {loading && <Loader />}
        <ImageGallery items={items} />
        
        <ToastContainer autoClose={4000}/>
      </>
    );
  }
}
