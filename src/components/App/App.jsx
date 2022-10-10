import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Box from '../Box';
import { ContainerApp, Error } from './App.styled';

import Loader from '../Loader/Loader';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { LoadMoreBtn } from '../Button/Button';
import Searchbar from '../Searchbar';

import { getImages } from '../../api/api';

export class App extends Component {
  state = {
    items: [],
    status: 'idle',
    page: 1,
    searchImages: '',
  };

  componentDidUpdate(_, prevState) {
    const { page, searchImages } = this.state;
    if (prevState.searchImages !== searchImages || prevState.page !== page) {
      this.fetchImages(searchImages, page);
    }
  }

  fetchImages = async (searchImages, page) => {
    if (!searchImages) {
      return;
    }
    try {
      this.setState({
        status: 'pending',
      });

      const { hits } = await getImages(searchImages, page);
      if (hits.length === 0) {
        toast.error(
          'Nothing was found according to your request. Try changing your search query.'
        );
        this.setState({
          status: 'rejected',
        });
        return;
      }

      this.setState({
        status: 'resolved',
        items: [...this.state.items, ...hits],
      });
    } catch (error) {
      this.setState({ status: 'rejected' });
    }
  };
  /*Получаем значения из компонента Searcbar и очищаем предыдущий поиск*/
  handleFormSubmit = searchImages => {
    this.setState({ searchImages, page: 1, items: [] });
  };

  loadMore = () => {
    this.setState(({ page }) => {
      return {
        page: page + 1,
      };
    });
  };

  render() {
    const { items, status } = this.state;
    const { handleFormSubmit, loadMore } = this;
    return (
      <ContainerApp>
        <Searchbar onSubmit={handleFormSubmit} />

        {status === 'rejected' && (
          <Error>Something went wrong. Please try again later.</Error>
        )}

        {items.length > 0 && <ImageGallery items={items} />}
        {status === 'pending' && <Loader />}
        <Box display="flex">
          {status === 'resolved' && items.length % 12 === 0 && (
            <LoadMoreBtn loadMore={loadMore} />
          )}
        </Box>
        <ToastContainer autoClose={4000} />
      </ContainerApp>
    );
  }
}
