import Vue from 'vue';
import Vuex from 'vuex';
import storageRef from '../main'; // eslint-disable-line

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    api: 'https://fitnesshouse-ba47f.firebaseio.com/services.json',
    view: 'ListServices',
    viewListService: 'FilterList',
    // cards
    listServices: '',
    listImages: [],
    urlImages: [],
    statusDataAPI: '',
    statusImagesAPI: false,
    statusUrlImages: false,
    lengthListImages: '',
    lengthListServices: '',
    commonArray: '',
    // filter
    categories: [], // name array of categories
    // result filters
    result: [],
    filter: [], // / all include categories
    resultCommonArray: [],
  },
  mutations: {
    // Receive services.json
    receiveData: (state) => {
      Vue.http.get(state.api).then((response) => {
        state.listServices = response.body;
        state.listServices.forEach((item) => {
          item.url = ''; // eslint-disable-line
        });
        state.statusDataAPI = response.ok;
        state.lengthListServices = response.body.length;
      }, (response) => { // eslint-disable-line
      });
    },
    // Receive list of imagesКатегория тренера
    receiveImg: (state) => {
      storageRef.child('img').listAll().then((response) => {
        if (response.items.length !== 0) {
          state.lengthListImages = response.items.length;
        }
        state.listImages = response.items.map(item => item.name);
      }, (response) => { // eslint-disable-line
      });
    },
    // Receive url of images
    receiveUrlImg: (state) => {
      state.listImages.forEach((item) => {
        storageRef.child(`img/${item}`).getDownloadURL().then((url) => {
          state.urlImages.push({
            name: item.slice(0, item.indexOf('.')),
            url,
          });
          if (state.lengthListImages === state.urlImages.length) {
            state.statusUrlImages = true;
          }
        });
      });
    },
    // merge images and services arr
    mergeImgServ: (state) => {
      state.listServices.forEach((service) => {
        service.description = service.description.slice(0, 100).trim(); // eslint-disable-line
        if (service.description.length >= 99) {
          service.description = `${service.description}...`; // eslint-disable-line
        }
        state.urlImages.forEach((img) => {
          if (service.alias === img.name) {
            service.url = img.url; // eslint-disable-line
          }
        });
      });
      state.commonArray = state.listServices;
    },
    // create list of categories filter
    createCatFilter: (state) => {
      let tmpCat = [];
      tmpCat = state.listServices.map(item => item.properties);
      let categories = [];
      tmpCat.forEach((item) => {
        item.forEach((subItem) => {
          if (!categories.includes(subItem.title)) {
            categories.push(subItem.title);
          }
        });
      });
      categories = categories.map(item => ({
        isShow: false,
        isUnder: false,
        title: item,
        value: [],
      }));
      state.categories = categories;
      tmpCat.forEach((item) => {
        item.forEach((subItem) => {
          state.categories.forEach((i) => {
            if (subItem.title === i.title) {
              if (!i.value.includes(subItem.title)) {
                i.value.push(subItem.title);
              }
              if (!i.value.includes(subItem.value)) {
                i.value.push(subItem.value);
              }
            }
          });
        });
      });
      state.result = state.categories.map(item => ({
        name: item.title,
        value: '',
      }));
    },
    // show sub menu filters
    showSubMenu: (state, payload) => {
      let arr = ''; // eslint-disable-line
      arr = state.categories.map((item) => { // eslint-disable-line
        if (item.title === payload) {
          item.isShow = !item.isShow; // eslint-disable-line
        } else {
          item.isShow = false; // eslint-disable-line
        }
      });
    },
    // change title of items filter
    changeSubMenu: (state, payload) => {
      let arr = ''; // eslint-disable-line
      arr = state.categories.map((item) => { // eslint-disable-line
        item.value.forEach((subItem) => {
          if (subItem === payload) {
            item.title = payload; // eslint-disable-line
            item.isShow = !item.isShow; // eslint-disable-line
          }
        });
      });
      const obj = {};
      state.commonArray.forEach((item) => {
        item.properties.forEach((subItem) => {
          if (subItem.value === payload) {
            obj.name = subItem.title;
            obj.value = payload;
          }
          if (subItem.title === payload) {
            obj.name = subItem.title;
            obj.value = '';
          }
        });
      });
      const tmpView = [];
      state.result.forEach((item) => {
        if (item.name === obj.name) {
          item.value = obj.value; // eslint-disable-line
        }
        if (item.value.length > 0) {
          tmpView.push(true);
        } else {
          tmpView.push(false);
        }
      });
      const statusValue = [];
      for (const str of tmpView) { // eslint-disable-line
        if (!statusValue.includes(str)) {
          statusValue.push(str);
        }
      }
      if (statusValue.length > 1) {
        state.view = 'FilterResult';
      } else {
        state.view = 'Main';
      }
      state.filter = [];
      state.resultCommonArray = [];
      state.commonArray.forEach((item) => {
        item.properties.forEach((subItem) => {
          state.result.forEach((val) => {
            if (subItem.value === val.value) {
              state.filter.push(item);
            }
          });
        });
      });
      for (const str of state.filter) { // eslint-disable-line
        if (!state.resultCommonArray.includes(str)) {
          state.resultCommonArray.push(str);
        }
      }
    },
    // show descript card
    showDescript: (state, payload) => {
      state.showService = 'ServicePage';
      state.isShowService = true;
      state.descriptionCard = payload;
    },
  },
  actions: {
    initialLoad: ({ commit, state }) => {
      commit('receiveImg');
      commit('receiveData');
      // repeat function receiveData, if status = false
      const statusReceiveDataAPI = setTimeout(function request() {
        if (state.statusDataAPI === true) {
          clearTimeout(statusReceiveDataAPI);
          commit('createCatFilter');
        } else {
          commit('receiveData');
          setTimeout(request, 500);
        }
      }, 500);
      // repeat function receiveImg, if status = false
      const statusReceiveImgAPI = setTimeout(function request() {
        if (state.lengthListImages === state.lengthListServices) {
          clearTimeout(statusReceiveImgAPI);
          state.statusImagesAPI = true;
        } else {
          commit('receiveImg');
          setTimeout(request, 500);
        }
      }, 500);
      // receive url images
      const statusImagesAPI = setTimeout(function request() {
        if (state.statusImagesAPI === true) {
          commit('receiveUrlImg');
          clearTimeout(statusImagesAPI);
        } else {
          setTimeout(request, 500);
        }
      }, 500);
      // merge images and services arr
      const statusUrlImages = setTimeout(function request() {
        if (state.statusUrlImages === true) {
          commit('mergeImgServ');
          clearTimeout(statusUrlImages);
        } else {
          setTimeout(request, 500);
        }
      }, 800);
    },
    // show sub menu filters
    showSubMenu: ({ commit }, payload) => {
      commit('showSubMenu', payload);
    },
    // change title of items filter
    changeSubMenu: ({ commit }, payload) => {
      commit('changeSubMenu', payload);
    },
    // show card description
    showDescript: ({ commit }, payload) => {
      commit('showDescript', payload);
    },
  },
  modules: {
  },
});
