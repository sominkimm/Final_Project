const { Op } = require('sequelize');
// const { User, Department } = require('../models/index');
const { Edukit } = require('../models/index');

const dao = {
  // 등록
  insert(params) {
    return new Promise((resolve, reject) => {
      Edukit.create(params).then((inserted) => {
        resolve(inserted);
      }).catch((err) => {
        reject(err);
      });
    });
  },
  // 리스트 조회
  selectList(params) {
    // where 검색 조건
    const setQuery = {};
    if (params.factoryname) {
      setQuery.where = {
        ...setQuery.where,
        factoryname: { [Op.like]: `%${params.factoryname}%` }, // like검색
      };
    }
    if (params.userid) {
      setQuery.where = {
        ...setQuery.where,
        userid: params.userid, // '='검색
      };
    }

    // order by 정렬 조건
    setQuery.order = [['id', 'DESC']];

    return new Promise((resolve, reject) => {
      Edukit.findAndCountAll({
        ...setQuery,
        attributes: { exclude: ['password'] }, // password 필드 제외
        // include: [
        //   {
        //     model: Department,
        //     as: 'Department',
        //   },
        // ],
      }).then((selectedList) => {
        resolve(selectedList);
      }).catch((err) => {
        reject(err);
      });
    });
  },
  // 상세정보 조회
  selectInfo(params) {
    return new Promise((resolve, reject) => {
      Edukit.findByPk(
        params.id,
        {
          attributes: { exclude: ['password'] }, // password 필드 제외
        },
      ).then((selectedInfo) => {
        resolve(selectedInfo);
      }).catch((err) => {
        reject(err);
      });
    });
  },
  // 수정
  update(params) {
    return new Promise((resolve, reject) => {
      Edukit.update(
        params,
        {
          where: { id: params.id },
        },
      ).then(([updated]) => {
        resolve({ updatedCount: updated });
      }).catch((err) => {
        reject(err);
      });
    });
  },
  // 삭제
  delete(params) {
    return new Promise((resolve, reject) => {
      Edukit.destroy({
        where: { id: params.id },
      }).then((deleted) => {
        resolve({ deletedCount: deleted });
      }).catch((err) => {
        reject(err);
      });
    });
  },
  // 로그인을 위한 사용자 조회
  selectUser(params) {
    return new Promise((resolve, reject) => {
      Edukit.findOne({
        attributes: ['id', 'userid', 'password', 'factoryname', 'ceoname'],
        where: { userid: params.userid },
      }).then((selectedOne) => {
        resolve(selectedOne);
      }).catch((err) => {
        reject(err);
      });
    });
  },
};

module.exports = dao;
