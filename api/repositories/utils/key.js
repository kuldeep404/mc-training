class KeyHelper {
  /**
   * @desc To get environment keys
   */
  getEnvironment() {
    return {
      dev    : 'dev',
      local  : 'local',
      preProd: 'preprod',
      prod   : 'prod',
      test   : 'test',
    };
  }

  /**
   * @desc To get feature and feature error keys
   */
  getFeature() {
    return {
      error: {
        hideFeature    : 'hideFeature',
        needPlanUpgrade: 'needPlanUpgrade',
        roleNotAllowed : 'roleNotAllowed',
      },
      feature: {
        advance                   : 'advance',
        advanceVendorCustomProfile: 'advanceVendorCustomProfile',
        advanceVendorProfile      : 'advanceVendorProfile',
        basicShipping             : 'basicShipping',
        commission                : 'commission',
        customFields              : 'customFields',
        global                    : 'global',
        muteNotification          : 'muteNotification',
        payment                   : 'payment',
        return                    : 'return',
        shipping                  : 'shipping',
        term                      : 'term',
        vendorManageShipping      : 'vendorManageShipping',
      },
    };
  }

  /**
   * @desc To get mapper keys
   */
  getMapper() {
    return {
      action     : 'action',
      defaults   : 'defaults',
      destination: 'destination',
      each       : 'each',
      item       : 'item',
      items      : 'items',
      source     : 'source',
      type       : 'type',
    };
  }

  /**
   * @desc To get plan keys
   */
  getPlan() {
    return {
      bootstrap: 'bootstrap',
      free     : 'free',
      growth   : 'growth',
      pro      : 'pro',
    };
  }

  /**
   * @desc To get product keys
   */
  getProduct() {
    return {
      status: {
        approved: 'Approved',
        deleted : 'Deleted',
        new     : 'New',
        partial : 'Partially Approved',
        rejected: 'Rejected',
        review  : 'Needs Review',
        reviewed: 'Reviewed',
      },
    };
  }

  /**
   * @desc To get shipping keys
   */
  getShipping() {
    return {
      all            : 'all',
      destination    : 'destination',
      equal          : 'equal',
      fixed          : 'fixed',
      flat           : 'flat',
      free           : 'free',
      none           : 'none',
      product        : 'product',
      productPrice   : 'productPrice',
      productQuantity: 'productQuantity',
      selected       : 'selected',
      serviceName    : 'MarketCube Custom Shipping Rate Provider',
      vendorManage   : 'vendorManage',
    };
  }

  /**
   * @desc To get user keys
   */
  getUser() {
    return {
      accountAdminLevel: 'account-admin',
      sellerRole       : 'seller',
      systemAdminLevel : 'system-admin',
      systemAdminRole  : 'systemAdmin',
      vendorRole       : 'vendor',
    };
  }

  /**
   * @desc To get version keys
   */
  getVersion() {
    return {
      alpha: 'alpha',
      beta : 'beta',
      live : 'live',
    };
  }
}

module.exports = new KeyHelper();
