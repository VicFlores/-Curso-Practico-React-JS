import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState/';

const App = () => {

  const initialState = useInitialState(API);

  const { mylist, trends, originals } = initialState;

  return (
    <div className='App'>
      <Header />
      <Search />

      { mylist.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carousel>
          { trends.map((item) => {
            <CarouselItem key={item.id} item={item} />;
          })}
        </Carousel>
      </Categories>

      <Categories title='Originales de Platzi Video'>
        <Carousel>
          { originals.map((item) => {
            <CarouselItem key={item.id} item={item} />;
          })}
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};

export default App;
