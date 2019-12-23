import Vue from 'vue'
import {postFetch,setToken} from "@/util/request_UT.js"
export default {
  namespaced:true,
  state: {
	  initReady:false,
	  destop:false,
	  isWX:false
  },
  mutations: {
	  clear(state, data){
		  state.initReady = false;
		  state.destop = false;
	  },
	  initReady(state, data){
		  state.initReady = true;
	  },
	  destop(state, data){
		  state.destop = true;
	  },
	  wx(state, data){
		  state.isWX = true;
	  }
  },
  actions:{
	  clear(context,data){
		  context.commit("clear");
	  },
	  initReady(context,data){
		  context.commit("initReady");
	  },
	  destop(context,data){
		  context.commit("destop");
	  },
	  wx(context,data){
		  context.commit("wx");
	  }
  }
 }