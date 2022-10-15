import { useState } from 'react';
import PropTypes from 'prop-types';
import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-toastify';
import {
  Header,
  SearchForm,
  SearchFormButton,
  FormInput,
} from './Searchbar.styled';

export default function Searchbar({ onSubmit }) {
  const [searchImages, setSearchImages] = useState('');

  const handleChange = event => {
    setSearchImages(event.target.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    /*Проверка на пустую строку */
    if (searchImages.trim() === '') {
      toast.warn('Enter your search details.');

      return;
    }
    onSubmit(searchImages); /*Передаём значение в App */
    setSearchImages('');
  };

  return (
    <Header>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit" aria-label="Search">
          <FcSearch size="30px" />
        </SearchFormButton>

        <FormInput
          type="text"
          name="searchImages"
          value={searchImages}
          onChange={handleChange}
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// export default class Searchbar extends Component {
//   state = {
//     searchImages: '',
//   };

//   handleChange = event => {
//     /*Универсальной метод сбора введённых данных */
//     const { value, name } = event.target;
//     this.setState({ [name]: value.toLowerCase() });
//     // this.setState({ searchImages: event.currentTarget.value.toLowerCase() });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     /*Проверка на пустую строку */
//     if (this.state.searchImages.trim() === '') {
//       toast.warn('Enter your search details.');

//       return;
//     }

//     this.props.onSubmit(this.state.searchImages); /*Передаём значение в App */
//     this.setState({ searchImages: ''})
//   };

//   render() {
//     const { searchImages } = this.state;
//     const { handleChange, handleSubmit } = this;
//     return (
//       <Header>
//         <SearchForm onSubmit={handleSubmit}>
//           <SearchFormButton type="submit" aria-label="Search">
//             <FcSearch size="30px" />
//           </SearchFormButton>

//           <FormInput
//             type="text"
//             name="searchImages"
//             value={searchImages}
//             onChange={handleChange}
//             autocomplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//           />
//         </SearchForm>
//       </Header>
//     );
//   }
// }
