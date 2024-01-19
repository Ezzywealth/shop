<a name="readme-top"></a>

# Market Place

# 📗 Table of Contents

- [About the Project](#about-project)
  - [Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [Redux Toolkit](#redux-toolkit)
  <!-- - [Live Demo](#live-demo) -->
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Usage](#usage)
  - [Deployment](#triangular_flag_on_post-deployment)
- [Authors](#authors)
- [Future Features](#future-features)
- [Contributing](#contributing)
- [Show your support](#support)
- [Acknowledgements](#acknowledgements)
- [License](#license)

## About the Project <a name="about-project"></a>

This project is an e-commerce platform designed to provide users with a seamless shopping experience. Users can explore a diverse range of products, access detailed information about selected items, browse through a catalog of images to customize the main view, add items to their shopping cart, review and manage cart contents, and conveniently remove items from the cart.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<summary>Client</summary>
<ul>
  <li><a href="https://reactjs.org/">NextJS</a></li>
  <li><a href="https://www.npmjs.com/package/react-toastify">React Toastify</a></li>
  <li><a href="https://redux.js.org/redux-toolkit/overview">Redux Toolkit</a></li>
  <li><a href="https://sass-lang.com/documentation/">SASS</a></li>
  <li><a href="https://dummyjson.com/">Dummy JSON</a></li>

</ul>

### Key Features <a name="key-features"></a>

- **Products listing**
- **Product details view**
- **Show related products**
- **Increase and decrease product quantity**
- **Add product to cart**
- **Cart page**
- **View cart details**
- **Delete product from cart**
- **Checkout page**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Redux Toolkit Implementation

### Redux Toolkit Overview <a name='redux-toolkit'></a>

Redux Toolkit is a set of tools that simplifies the Redux development experience. In this project, we've adopted Redux Toolkit for its built-in utilities, including the use of slices for reducer logic and an opinionated store setup that reduces boilerplate code.

### Folder Structure

Our Redux implementation follows a structured organization to keep the codebase clean and maintainable. Here's a brief overview of the key directories:

- `src/Redux/Slices`: Contains Redux slices, each representing a specific feature.
- `src/Redux/Store`: Houses the Redux store configuration.

### Store Configuration

The Redux store is configured in the `src/app` directory. It utilizes the `configureStore` function from Redux Toolkit, which includes default middleware and additional configuration options. This setup ensures a consistent and scalable state management solution for our application.

### Data Fetching with createAsyncThunk

In this project, we have adopted the use of `createAsyncThunk` from Redux Toolkit for handling asynchronous actions, particularly for data fetching. This decision offers several advantages, including simplified management of loading, success, and error states associated with asynchronous operations.

> Key Benefits

1. **Loading States:**

   - With `createAsyncThunk`, we can easily manage loading states in our application. This is especially beneficial when fetching data from an API, as it allows components to display loading indicators or handle UI changes based on the fetch status.

2. **Error Handling:**

   - The built-in error handling provided by `createAsyncThunk` simplifies the process of managing errors during data fetching. We can gracefully handle and display error messages to users, improving the overall user experience.

3. **Redux DevTools Integration:**
   - `createAsyncThunk` integrates seamlessly with the Redux DevTools extension, providing a clear and detailed view of asynchronous actions, including their lifecycle and payload. This aids in debugging and understanding the flow of data fetching in the application.

### Conclusion

Leveraging Redux Toolkit, specifically slices and the pre-configured store, has streamlined our state management process. The intuitive API and reduction in boilerplate code contribute to a more maintainable and efficient Redux implementation for our project.

<!-- ## 🚀 Live Demo <a name="live-demo"></a>

[Click Here!!!]() -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

- A browser (e.g. chrome or Firefox)
- An IDE (e.g. [Visusal Studio Code](https://code.visualstudio.com/download))
- [npm](https://nodejs.org/en/)
- Terminal

### Setup

To clone this repository to your desired folder, follow the steps below:

**Using the command line**

- Use the following commands

```sh
  cd my-folder
  git clone https://github.com/Ezzywealth/shop.git
```

**Using GitHub Desktop app**

- Follow the steps below

  - Visit this link "https://github.com/Ezzywealth/shop"
  - Click the green button labelled "code"
  - Select the "Open with GitHub Desktop" option
  - After the GitHub Desktop add opens, click the "clone repo" button

### Usage

To run the project, execute the following command:

- **npm install**
- **npm run dev**

### Deployment

You can deploy this project by:

- visit [Vercel.com](https://vercel.com)
- Register to get an account if you don't have one
- Click on Add new project
- Select project options
- Select lendsqr repo
- Deploy using vercel

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Authors <a name="authors"></a>

👤 **Ezekiel Udiomuno**

- GitHub: [@Ezzywealth](https://github.com/Ezzywealth)
- Twitter: [@Ezzywealth](https://twitter.com/EzzyWealth)
- LinkedIn: [Ezekiel Udiomuno](https://linkedin.com/in/ezekiel-udiomnuno)

## 🔭 Future Features <a name="future-features"></a>

- [ ] **[Checkout page]**
- [ ] **[About page]**
- [ ] **[Contact page]**
- [ ] **[Payment gateway]**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⭐️ Show your support <a name="support"></a>

If you like this project, give it a `star` and let me know what you like in
particular.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏 Acknowledgments <a name="acknowledgements"></a>

We would like to thank...

- [Sippy](https://www.sippy.life/) for the opportunity to take the assessment test.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE.md) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
