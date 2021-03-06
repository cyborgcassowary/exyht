Ember.TEMPLATES["_editor"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n");
  stack1 = helpers['if'].call(depth0, "commentFeature", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("  \r\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n  ");
  stack1 = helpers['if'].call(depth0, "isCommentDivShown", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n\r\n  ");
  stack1 = helpers['if'].call(depth0, "isHideAddComment", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n  <div class=\"addCommentDiv\">\r\n\r\n   <div id=\"showError\"></div>\r\n\r\n   <h4>\r\n   <span class=\"pull-right\" style=\"padding-left:1%;padding-right:1%;\">\r\n    ");
  data.buffer.push(escapeExpression((helper = helpers['manage-editor'] || (depth0 && depth0['manage-editor']),options={hash:{
    'isHiding': (true),
    'name': ("name"),
    'email': ("email"),
    'typeComment': ("typeComment"),
    'sendingCommentOn': ("sendingCommentOn"),
    'isCommentDivShown': ("isCommentDivShown"),
    'isHideAddComment': ("isHideAddComment"),
    'actualPostId': ("actualPostId"),
    'actualTitle': ("actualTitle"),
    'isReplying': ("isReplying"),
    'currentSlug': ("currentSlug"),
    'commentIdToReply': ("commentIdToReply"),
    'commenterNameToReply': ("commenterNameToReply"),
    'commenterGravaterToReply': ("commenterGravaterToReply")
  },hashTypes:{'isHiding': "BOOLEAN",'name': "ID",'email': "ID",'typeComment': "ID",'sendingCommentOn': "ID",'isCommentDivShown': "ID",'isHideAddComment': "ID",'actualPostId': "ID",'actualTitle': "ID",'isReplying': "ID",'currentSlug': "ID",'commentIdToReply': "ID",'commenterNameToReply': "ID",'commenterGravaterToReply': "ID"},hashContexts:{'isHiding': depth0,'name': depth0,'email': depth0,'typeComment': depth0,'sendingCommentOn': depth0,'isCommentDivShown': depth0,'isHideAddComment': depth0,'actualPostId': depth0,'actualTitle': depth0,'isReplying': depth0,'currentSlug': depth0,'commentIdToReply': depth0,'commenterNameToReply': depth0,'commenterGravaterToReply': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "manage-editor", options))));
  data.buffer.push("\r\n   \r\n   </span>\r\n   <span class=\"pull-right\">\r\n   ");
  data.buffer.push(escapeExpression((helper = helpers['manage-editor'] || (depth0 && depth0['manage-editor']),options={hash:{
    'isCanceling': (true),
    'name': ("name"),
    'email': ("email"),
    'typeComment': ("typeComment"),
    'sendingCommentOn': ("sendingCommentOn"),
    'isCommentDivShown': ("isCommentDivShown"),
    'actualPostId': ("actualPostId"),
    'actualTitle': ("actualTitle"),
    'isReplying': ("isReplying"),
    'currentSlug': ("currentSlug"),
    'commentIdToReply': ("commentIdToReply"),
    'commenterNameToReply': ("commenterNameToReply"),
    'commenterGravaterToReply': ("commenterGravaterToReply")
  },hashTypes:{'isCanceling': "BOOLEAN",'name': "ID",'email': "ID",'typeComment': "ID",'sendingCommentOn': "ID",'isCommentDivShown': "ID",'actualPostId': "ID",'actualTitle': "ID",'isReplying': "ID",'currentSlug': "ID",'commentIdToReply': "ID",'commenterNameToReply': "ID",'commenterGravaterToReply': "ID"},hashContexts:{'isCanceling': depth0,'name': depth0,'email': depth0,'typeComment': depth0,'sendingCommentOn': depth0,'isCommentDivShown': depth0,'actualPostId': depth0,'actualTitle': depth0,'isReplying': depth0,'currentSlug': depth0,'commentIdToReply': depth0,'commenterNameToReply': depth0,'commenterGravaterToReply': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "manage-editor", options))));
  data.buffer.push("\r\n    </span>\r\n\r\n   &nbsp; \r\n\r\n   ");
  stack1 = helpers['if'].call(depth0, "isReplying", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n     \r\n   </h4>\r\n   <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-lg-6\">\r\n        \r\n        \r\n          ");
  stack1 = helpers._triageMustache.call(depth0, "editor-tools", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        \r\n          ");
  data.buffer.push(escapeExpression((helper = helpers['auto-expanding-text-area'] || (depth0 && depth0['auto-expanding-text-area']),options={hash:{
    'class': ("form-control"),
    'maxlength': ("2000"),
    'row': ("7"),
    'value': ("typeComment")
  },hashTypes:{'class': "STRING",'maxlength': "STRING",'row': "STRING",'value': "ID"},hashContexts:{'class': depth0,'maxlength': depth0,'row': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "auto-expanding-text-area", options))));
  data.buffer.push("\r\n   \r\n          ");
  stack1 = helpers['if'].call(depth0, "showNewCommentLength", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n          <div class=\"row\" style=\"margin-top:2px;\" >\r\n            <div class=\"col-xs-4\">\r\n              <label class=\"sr-only\" for=\"name\">Name:</label>\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control input-sm"),
    'type': ("text"),
    'id': ("name"),
    'value': ("name"),
    'placeholder': ("Name")
  },hashTypes:{'class': "STRING",'type': "STRING",'id': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'class': depth0,'type': depth0,'id': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n            </div>\r\n            <div class=\"col-xs-4\">\r\n              <label class=\"sr-only\" for=\"email\">Email:</label>\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control input-sm"),
    'type': ("email"),
    'id': ("email"),
    'value': ("email"),
    'placeholder': ("Email")
  },hashTypes:{'class': "STRING",'type': "STRING",'id': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'class': depth0,'type': depth0,'id': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n            </div>\r\n            <div class=\"col-xs-2\">\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("hidden"),
    'value': ("actualPostId")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                \r\n                  ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'name': ("spam_bot"),
    'class': ("hidden"),
    'value': ("valueForSpam")
  },hashTypes:{'type': "STRING",'name': "STRING",'class': "STRING",'value': "ID"},hashContexts:{'type': depth0,'name': depth0,'class': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n\r\n                  ");
  data.buffer.push(escapeExpression((helper = helpers['add-comment'] || (depth0 && depth0['add-comment']),options={hash:{
    'isSending': (true),
    'name': ("name"),
    'email': ("email"),
    'typeComment': ("typeComment"),
    'sendingCommentOn': ("sendingCommentOn"),
    'comments': ("comments"),
    'isCommentDivShown': ("isCommentDivShown"),
    'isHideAddComment': ("isHideAddComment"),
    'commentsArray': ("commentsArray"),
    'actualPostId': ("actualPostId"),
    'actualTitle': ("actualTitle"),
    'isReplying': ("isReplying"),
    'valueForSpam': ("valueForSpam"),
    'currentSlug': ("currentSlug"),
    'commentIdToReply': ("commentIdToReply"),
    'commenterNameToReply': ("commenterNameToReply"),
    'commenterGravaterToReply': ("commenterGravaterToReply")
  },hashTypes:{'isSending': "BOOLEAN",'name': "ID",'email': "ID",'typeComment': "ID",'sendingCommentOn': "ID",'comments': "ID",'isCommentDivShown': "ID",'isHideAddComment': "ID",'commentsArray': "ID",'actualPostId': "ID",'actualTitle': "ID",'isReplying': "ID",'valueForSpam': "ID",'currentSlug': "ID",'commentIdToReply': "ID",'commenterNameToReply': "ID",'commenterGravaterToReply': "ID"},hashContexts:{'isSending': depth0,'name': depth0,'email': depth0,'typeComment': depth0,'sendingCommentOn': depth0,'comments': depth0,'isCommentDivShown': depth0,'isHideAddComment': depth0,'commentsArray': depth0,'actualPostId': depth0,'actualTitle': depth0,'isReplying': depth0,'valueForSpam': depth0,'currentSlug': depth0,'commentIdToReply': depth0,'commenterNameToReply': depth0,'commenterGravaterToReply': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "add-comment", options))));
  data.buffer.push("\r\n                \r\n            </div>\r\n          </div>\r\n    \r\n      </div>\r\n        <div class=\"col-lg-6\" id=\"typingCommentDiv\" style=\"border:1px dashed #000;background-color:#ffffff;padding:1%;height:115px;overflow:auto;\">\r\n          ");
  data.buffer.push(escapeExpression((helper = helpers['format-markdown'] || (depth0 && depth0['format-markdown']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "typeComment", options) : helperMissing.call(depth0, "format-markdown", "typeComment", options))));
  data.buffer.push("\r\n        </div>\r\n     </div>\r\n    </div>\r\n   </div>\r\n  ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n    <small>\r\n      <div class=\"pull-left\" style=\"padding-left:1%;\">Replying to&nbsp;comment by&nbsp;</div>\r\n      <div class=\"pull-left\">");
  data.buffer.push(escapeExpression((helper = helpers['gravatar-image'] || (depth0 && depth0['gravatar-image']),options={hash:{
    'email': ("commenterGravaterToReply"),
    'size': ("20"),
    'notReply': (false)
  },hashTypes:{'email': "ID",'size': "STRING",'notReply': "BOOLEAN"},hashContexts:{'email': depth0,'size': depth0,'notReply': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "gravatar-image", options))));
  data.buffer.push("</div>\r\n      <div class=\"pull-left\">&nbsp;<strong>");
  stack1 = helpers._triageMustache.call(depth0, "commenterNameToReply", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(":</strong></div>\r\n    </small>\r\n   ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n    <small>Commenting to&nbsp;\r\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],data:data},helper ? helper.call(depth0, "post", "currentSlug", "actualPostId", options) : helperMissing.call(depth0, "link-to", "post", "currentSlug", "actualPostId", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    </small>\r\n   ");
  return buffer;
  }
function program7(depth0,data) {
  
  
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "actualTitle", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  }

function program9(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n            <div style=\"text-align:center;padding:0.5%;\">");
  stack1 = helpers._triageMustache.call(depth0, "newCommentLength", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" to go for the post</div>\r\n          ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n    ");
  data.buffer.push(escapeExpression((helper = helpers['manage-editor'] || (depth0 && depth0['manage-editor']),options={hash:{
    'isShowing': (true),
    'isCommentDivShown': ("isCommentDivShown"),
    'isHideAddComment': ("isHideAddComment")
  },hashTypes:{'isShowing': "BOOLEAN",'isCommentDivShown': "ID",'isHideAddComment': "ID"},hashContexts:{'isShowing': depth0,'isCommentDivShown': depth0,'isHideAddComment': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "manage-editor", options))));
  data.buffer.push("\r\n  ");
  return buffer;
  }

  stack1 = helpers.unless.call(depth0, "readOnlyMode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["_footer"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\r\n    <p>\r\n        <a href=\"#topNavbar\"><i class=\"fa fa-arrow-up\"></i> Back to top</a>\r\n    </p>\r\n");
  }

  data.buffer.push("<div class=\"blog-footer\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'style': ("footerBgColor")
  },hashTypes:{'style': "STRING"},hashContexts:{'style': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n        \r\n");
  stack1 = helpers['if'].call(depth0, "hasNavbar", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    <p>Copyright &copy; ");
  stack1 = helpers._triageMustache.call(depth0, "currentYear", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" - ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "blogTitle", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" - All rights reserved</p>\r\n    <p class=\"small\">Built with <a href=\"https://github.com/Exyht/exyht\" alt=\"Exyht link\">Exyht</a></p>\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["_navbar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n    <nav class=\"navbar navbar-default navbar-static-top\" id=\"topNavbar\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'style': ("navBgColor")
  },hashTypes:{'style': "STRING"},hashContexts:{'style': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n        <div class=\"container container-fluid\">\r\n          <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar-collapse-1\">\r\n              <span class=\"sr-only\">Toggle navigation</span>\r\n              <span class=\"icon-bar\"></span>\r\n              <span class=\"icon-bar\"></span>\r\n              <span class=\"icon-bar\"></span>\r\n            </button>\r\n          </div>\r\n          <div class=\"collapse navbar-collapse\" id=\"navbar-collapse-1\">\r\n            <ul class=\"nav navbar-nav\">\r\n              ");
  stack1 = helpers.each.call(depth0, "blogLinks", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </ul>\r\n          </div><!-- /.navbar-collapse -->\r\n        </div>\r\n    </nav>\r\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n               ");
  stack1 = helpers['if'].call(depth0, "navUrl", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n              ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                ");
  stack1 = helpers['if'].call(depth0, "isBlogUrl", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n               ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                  <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("blog-nav-item active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\r\n                ");
  return buffer;
  }
function program5(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "link_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                  <li><a class=\"blog-nav-item\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("url")
  },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "link_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a></li>\r\n                ");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "hasNavbar", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["_sidebar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n  <div class=\"row\">\r\n    <div class=\"sidebar-module col-xs-6\">\r\n      ");
  stack1 = helpers.unless.call(depth0, "image", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n  <div class=\"sidebar-module-inset col-xs-10\">\r\n    <h4>About</h4>\r\n      ");
  data.buffer.push(escapeExpression((helper = helpers['format-markdown'] || (depth0 && depth0['format-markdown']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "about", options) : helperMissing.call(depth0, "format-markdown", "about", options))));
  data.buffer.push("\r\n  </div>\r\n  </div>\r\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n        <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("hashedEmail")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" alt='person image'/>\r\n      ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n        <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("image")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" alt='person image' height=\"170px\" width=\"170px\"/>\r\n      ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n        <li ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("sa.created")
  },hashTypes:{'title': "ID"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"sidebar-archive-link\">\r\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "post", "sa", options) : helperMissing.call(depth0, "link-to", "post", "sa", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </li>\r\n      ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n\r\n            ");
  stack1 = helpers['if'].call(depth0, "sa.has_img", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n            ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "sa.title", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n\r\n          ");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n              ");
  data.buffer.push(escapeExpression((helper = helpers['format-markdown'] || (depth0 && depth0['format-markdown']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "sa.first_img", options) : helperMissing.call(depth0, "format-markdown", "sa.first_img", options))));
  data.buffer.push("\r\n            ");
  return buffer;
  }

function program10(depth0,data) {
  
  
  data.buffer.push("\r\n        <h3>See all <i class=\"fa fa-chevron-right\"></i></h3>\r\n      ");
  }

function program12(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n        ");
  stack1 = helpers['if'].call(depth0, "elseUrl", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n      ");
  return buffer;
  }
function program13(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n          <li><a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("url")
  },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "link_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a></li>\r\n        ");
  return buffer;
  }

  data.buffer.push("\r\n<div class=\"col-sm-3 col-sm-offset-1 blog-sidebar\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'style': ("sidebarBgColor")
  },hashTypes:{'style': "STRING"},hashContexts:{'style': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n");
  stack1 = helpers['with'].call(depth0, "sidebarAuthor", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n  <div class=\"row\">\r\n  <div class=\"sidebar-module col-xs-10\">\r\n    <h4>Archive</h4>\r\n    <ol class=\"list-unstyled\">\r\n      ");
  stack1 = helpers.each.call(depth0, "sa", "in", "sidebarArchive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    </ol>\r\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "archive", options) : helperMissing.call(depth0, "link-to", "archive", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n  </div>\r\n  </div>\r\n  <div class=\"row\">\r\n  <div class=\"sidebar-module col-xs-6\">\r\n    <h4>Elsewhere</h4>\r\n      <ol class=\"list-unstyled\">\r\n      ");
  stack1 = helpers.each.call(depth0, "blogLinks", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n      </ol>\r\n  </div>\r\n</div>\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\r\n         <div class=\"alert alert-warning\" role=\"alert\">\r\n          The Entire Blog is now in <strong>Read Only Mode</strong>\r\n         </div>\r\n        ");
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n          <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("blogLogo")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" height=\"70px\" max-width=\"300px\"/>\r\n        ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n            ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "blogTitle", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n          ");
  return buffer;
  }

  data.buffer.push("  <div class=\"container-full\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'style': ("bodyBgColor")
  },hashTypes:{'style': "STRING"},hashContexts:{'style': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n  ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "navbar", options) : helperMissing.call(depth0, "partial", "navbar", options))));
  data.buffer.push("\r\n    <div class=\"container\">\r\n      <div class=\"blog-header\">\r\n        ");
  stack1 = helpers['if'].call(depth0, "readOnlyMode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n        <div class=\"media blog-title\">\r\n\r\n      <div class=\"pull-left\">\r\n        ");
  stack1 = helpers['if'].call(depth0, "hasLogo", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n      </div>\r\n      \r\n      <div class=\"media-body\">\r\n      \r\n        <h1 class=\"media-heading\">\r\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </h1>\r\n        <p class=\"lead blog-description\">\r\n          ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "blogSubTitle", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n        </p>\r\n        ");
  data.buffer.push(escapeExpression((helper = helpers['format-markdown'] || (depth0 && depth0['format-markdown']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "comment", options) : helperMissing.call(depth0, "format-markdown", "comment", options))));
  data.buffer.push("\r\n      </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        \r\n        ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "sidebar", options) : helperMissing.call(depth0, "partial", "sidebar", options))));
  data.buffer.push("  \r\n      </div><!-- /.row -->\r\n    </div><!-- /.container -->\r\n\r\n    \r\n  </div> <!-- /container full -->\r\n  ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "footer", options) : helperMissing.call(depth0, "partial", "footer", options))));
  data.buffer.push("\r\n  \r\n  ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "editor", options) : helperMissing.call(depth0, "partial", "editor", options))));
  data.buffer.push("\r\n");
  return buffer;
  
});

Ember.TEMPLATES["archive"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n			<li class=\"list-group-item\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("topic.title")
  },hashTypes:{'title': "ID"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "post", "topic", options) : helperMissing.call(depth0, "link-to", "post", "topic", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\r\n		");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "topic.title", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  }

  data.buffer.push("<div class=\"col-sm-8 blog-main\">\r\n	<div class=\"blog-post\">\r\n		<h2>Archive</h2>\r\n		<ul class=\"list-group\">\r\n		");
  stack1 = helpers.each.call(depth0, "topic", "in", "archive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n		</ul>\r\n	</div>\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["comments"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n  <div class=\"media\">\r\n\r\n        <div class=\"pull-left\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("name")
  },hashTypes:{'title': "ID"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n          ");
  data.buffer.push(escapeExpression((helper = helpers['gravatar-image'] || (depth0 && depth0['gravatar-image']),options={hash:{
    'email': ("email")
  },hashTypes:{'email': "ID"},hashContexts:{'email': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "gravatar-image", options))));
  data.buffer.push("\r\n        </div>\r\n\r\n        <div class=\"media-body\">\r\n\r\n         <h5 class=\"media-heading\">\r\n             <strong>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</strong>\r\n             <div class=\"pull-right\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("cdate")
  },hashTypes:{'title': "ID"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n              <time>");
  data.buffer.push(escapeExpression((helper = helpers['time-ago'] || (depth0 && depth0['time-ago']),options={hash:{
    'createdAt': ("cdate")
  },hashTypes:{'createdAt': "ID"},hashContexts:{'createdAt': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "time-ago", options))));
  data.buffer.push("</time>\r\n             </div>\r\n\r\n             ");
  stack1 = helpers['if'].call(depth0, "replyToComment.commentHasReply", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n         </h5>\r\n          ");
  data.buffer.push(escapeExpression((helper = helpers['format-markdown'] || (depth0 && depth0['format-markdown']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "comment", options) : helperMissing.call(depth0, "format-markdown", "comment", options))));
  data.buffer.push("\r\n        </div>\r\n        ");
  stack1 = helpers['if'].call(depth0, "readOnlyMode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n  </div>\r\n     \r\n  <hr />\r\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n               <div class=\"pull-right\">   \r\n                  ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "replyToComment.name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" &nbsp;\r\n               </div>\r\n               <div class=\"pull-right\" style=\"padding-right:1%;\">\r\n                  ");
  data.buffer.push(escapeExpression((helper = helpers['gravatar-image'] || (depth0 && depth0['gravatar-image']),options={hash:{
    'email': ("replyToComment.email"),
    'size': ("18"),
    'notReply': (false)
  },hashTypes:{'email': "ID",'size': "STRING",'notReply': "BOOLEAN"},hashContexts:{'email': depth0,'size': depth0,'notReply': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "gravatar-image", options))));
  data.buffer.push("&nbsp;\r\n               </div>\r\n               <div class=\"pull-right\">\r\n                 <i class=\"fa fa-share\"></i>&nbsp;\r\n               </div>\r\n             ");
  return buffer;
  }

function program4(depth0,data) {
  
  
  data.buffer.push("\r\n        <div>\r\n          <button class=\"btn btn-default\" type=\"button\" disabled=\"disabled\"><i class=\"fa fa-flag-o\"></i></button>\r\n          <button class=\"btn btn-info\" title=\"Reply to comment\" type=\"button\" disabled=\"disabled\"><i class=\"fa fa-reply\"></i> Reply</button>\r\n        </div>\r\n        ");
  }

function program6(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n        <div>\r\n          ");
  data.buffer.push(escapeExpression((helper = helpers['flag-comment'] || (depth0 && depth0['flag-comment']),options={hash:{
    'isFlagged': ("isFlagged"),
    'id': ("id")
  },hashTypes:{'isFlagged': "ID",'id': "ID"},hashContexts:{'isFlagged': depth0,'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "flag-comment", options))));
  data.buffer.push("\r\n\r\n          ");
  data.buffer.push(escapeExpression((helper = helpers['add-comment'] || (depth0 && depth0['add-comment']),options={hash:{
    'isReply': (true),
    'notReply': (false),
    'postId': ("postIdFromPostCtlr"),
    'comments': ("getCommentsArrayFromPostCtlr"),
    'isCommentDivShown': ("isCommentDivShown"),
    'isHideAddComment': ("isHideAddComment"),
    'commentsArray': ("commentsArray"),
    'actualPostId': ("actualPostId"),
    'isReplying': ("isReplying"),
    'actualTitle': ("actualTitle"),
    'currentSlug': ("currentSlug"),
    'cmtId': ("id"),
    'cmtName': ("name"),
    'cmtEmail': ("email"),
    'commentIdToReply': ("commentIdToReply"),
    'commenterNameToReply': ("commenterNameToReply"),
    'commenterGravaterToReply': ("commenterGravaterToReply")
  },hashTypes:{'isReply': "BOOLEAN",'notReply': "BOOLEAN",'postId': "ID",'comments': "ID",'isCommentDivShown': "ID",'isHideAddComment': "ID",'commentsArray': "ID",'actualPostId': "ID",'isReplying': "ID",'actualTitle': "ID",'currentSlug': "ID",'cmtId': "ID",'cmtName': "ID",'cmtEmail': "ID",'commentIdToReply': "ID",'commenterNameToReply': "ID",'commenterGravaterToReply': "ID"},hashContexts:{'isReply': depth0,'notReply': depth0,'postId': depth0,'comments': depth0,'isCommentDivShown': depth0,'isHideAddComment': depth0,'commentsArray': depth0,'actualPostId': depth0,'isReplying': depth0,'actualTitle': depth0,'currentSlug': depth0,'cmtId': depth0,'cmtName': depth0,'cmtEmail': depth0,'commentIdToReply': depth0,'commenterNameToReply': depth0,'commenterGravaterToReply': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "add-comment", options))));
  data.buffer.push("\r\n        </div>\r\n        ");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "commentFeature", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["error"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"col-sm-8 blog-main\">\r\n	<div class=\"alert alert-warning\" role=\"alert\" style=\"text-align:center;padding:2%;\">Error! Maybe Server Error.</div>\r\n</div>");
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n	");
  stack1 = helpers.unless.call(depth0, "no_post", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    <div>");
  data.buffer.push(escapeExpression((helper = helpers['format-xmarkdown'] || (depth0 && depth0['format-xmarkdown']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "body", options) : helperMissing.call(depth0, "format-xmarkdown", "body", options))));
  data.buffer.push("\r\n    <span>\r\n    	");
  stack1 = helpers.unless.call(depth0, "no_post", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    </span>\r\n    </div>\r\n    <hr />\r\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n    	<h1>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "post", "", options) : helperMissing.call(depth0, "link-to", "post", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\r\n    ");
  return buffer;
  }
function program3(depth0,data) {
  
  
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n    	<h1>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</h1>\r\n    ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n      		<span class=\"pull-right\"><i class=\"fa fa-clock-o\"></i> ");
  data.buffer.push(escapeExpression((helper = helpers['format-archive-date'] || (depth0 && depth0['format-archive-date']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "created", options) : helperMissing.call(depth0, "format-archive-date", "created", options))));
  data.buffer.push("</span>\r\n      		");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "post", "", options) : helperMissing.call(depth0, "link-to", "post", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n      	");
  return buffer;
  }
function program8(depth0,data) {
  
  
  data.buffer.push("Continue reading...");
  }

  data.buffer.push("\r\n<div class=\"col-sm-8 blog-main\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'style': ("postBgColor")
  },hashTypes:{'style': "STRING"},hashContexts:{'style': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n\r\n<div class=\"blog-post\">\r\n");
  stack1 = helpers.each.call(depth0, "posts", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  stack1 = helpers._triageMustache.call(depth0, "infinite-scroll", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div><!-- /.blog-post -->\r\n\r\n</div><!-- /.blog-main -->");
  return buffer;
  
});

Ember.TEMPLATES["loading"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"col-sm-8 blog-main\">\r\n	<div class=\"alert alert-warning loadingError\" role=\"alert\" style=\"text-align:center;padding:2%;\">Loading...</div>\r\n</div>");
  
});

Ember.TEMPLATES["post"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n    <h1>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</h1>\r\n     ");
  stack1 = helpers._triageMustache.call(depth0, "view.postCreated", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n	<hr />\r\n\r\n	<div>");
  data.buffer.push(escapeExpression((helper = helpers['format-xmarkdown'] || (depth0 && depth0['format-xmarkdown']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "post", options) : helperMissing.call(depth0, "format-xmarkdown", "post", options))));
  data.buffer.push("</div>\r\n\r\n	  	");
  stack1 = helpers['if'].call(depth0, "isPrevId", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n	  	");
  stack1 = helpers['if'].call(depth0, "isNextId", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n	  	<br />\r\n	 	");
  stack1 = helpers['if'].call(depth0, "commentFeature", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n	");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n        	<div class=\"pull-left\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],data:data},helper ? helper.call(depth0, "post", "prevTitleSlug", "previousId", options) : helperMissing.call(depth0, "link-to", "post", "prevTitleSlug", "previousId", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\r\n	  	");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("<i class=\"fa fa-arrow-left\"></i> ");
  stack1 = helpers._triageMustache.call(depth0, "prevTitle", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n	    	<div class=\"pull-right\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],data:data},helper ? helper.call(depth0, "post", "nextTitleSlug", "nextId", options) : helperMissing.call(depth0, "link-to", "post", "nextTitleSlug", "nextId", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\r\n	  	");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', stack1;
  stack1 = helpers._triageMustache.call(depth0, "nextTitle", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <i class=\"fa fa-arrow-right\"></i>");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n      		<div class=\"breadcrumb\">\r\n	  		");
  stack1 = helpers['if'].call(depth0, "commentsLength", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        	");
  stack1 = helpers._triageMustache.call(depth0, "view.pageViewCount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n      		</div>\r\n	  		<hr />\r\n\r\n	  		");
  stack1 = helpers.each.call(depth0, "item", "in", "comments", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n	  		");
  stack1 = helpers['if'].call(depth0, "readOnlyMode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n		");
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n        		");
  stack1 = helpers._triageMustache.call(depth0, "model.comments.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  data.buffer.push(escapeExpression((helper = helpers['format-comment-number'] || (depth0 && depth0['format-comment-number']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "model.comments.length", options) : helperMissing.call(depth0, "format-comment-number", "model.comments.length", options))));
  data.buffer.push(" &nbsp;&nbsp;\r\n      		");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n	    		");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "comments", "item", options) : helperMissing.call(depth0, "render", "comments", "item", options))));
  data.buffer.push("\r\n	  		");
  return buffer;
  }

function program13(depth0,data) {
  
  
  data.buffer.push("\r\n	    		<button class=\"btn btn-info pull-right\" type=\"button\" disabled=\"disabled\"><i class=\"fa fa-plus-circle\"></i> Add comment</button>\r\n	  		");
  }

function program15(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n	  			");
  data.buffer.push(escapeExpression((helper = helpers['add-comment'] || (depth0 && depth0['add-comment']),options={hash:{
    'notReply': (true),
    'isReply': (false),
    'postId': ("id"),
    'title': ("title"),
    'comments': ("comments"),
    'isCommentDivShown': ("isCommentDivShown"),
    'isHideAddComment': ("isHideAddComment"),
    'commentsArray': ("commentsArray"),
    'actualPostId': ("actualPostId"),
    'isReplying': ("isReplying"),
    'actualTitle': ("actualTitle"),
    'currentSlug': ("currentSlug"),
    'commentIdToReply': ("commentIdToReply"),
    'commenterNameToReply': ("commenterNameToReply"),
    'commenterGravaterToReply': ("commenterGravaterToReply")
  },hashTypes:{'notReply': "BOOLEAN",'isReply': "BOOLEAN",'postId': "ID",'title': "ID",'comments': "ID",'isCommentDivShown': "ID",'isHideAddComment': "ID",'commentsArray': "ID",'actualPostId': "ID",'isReplying': "ID",'actualTitle': "ID",'currentSlug': "ID",'commentIdToReply': "ID",'commenterNameToReply': "ID",'commenterGravaterToReply': "ID"},hashContexts:{'notReply': depth0,'isReply': depth0,'postId': depth0,'title': depth0,'comments': depth0,'isCommentDivShown': depth0,'isHideAddComment': depth0,'commentsArray': depth0,'actualPostId': depth0,'isReplying': depth0,'actualTitle': depth0,'currentSlug': depth0,'commentIdToReply': depth0,'commenterNameToReply': depth0,'commenterGravaterToReply': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "add-comment", options))));
  data.buffer.push("\r\n	  		");
  return buffer;
  }

  data.buffer.push("<div class=\"col-sm-8 blog-main\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'style': ("postBgColor")
  },hashTypes:{'style': "STRING"},hashContexts:{'style': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n   <div class=\"blog-post\">\r\n   ");
  stack1 = helpers['if'].call(depth0, "hasPost", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    </div><!-- /.blog-post -->\r\n\r\n</div><!-- /.blog-main -->");
  return buffer;
  
});

Ember.TEMPLATES["components/add-comment"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n<button class=\"btn btn-info\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addCmtAction", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\r\n	<i class=\"fa fa-plus-circle\"></i> Add comment\r\n</button>\r\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n<button class=\"btn btn-info\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addCmtAction", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\r\n	<i class=\"fa fa-reply\"></i> Reply\r\n</button>\r\n");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n	");
  stack1 = helpers['if'].call(depth0, "sendingCommentOn", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
  }
function program6(depth0,data) {
  
  
  data.buffer.push("\r\n        <button class=\"btn btn-primary btn-sm\">Submitting...</button>\r\n    ");
  }

function program8(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n		<button type=\"button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sendCmt", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-success btn-sm\"> Submit</button>\r\n	");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "notReply", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n");
  stack1 = helpers['if'].call(depth0, "isReply", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n");
  stack1 = helpers['if'].call(depth0, "isSending", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n	");
  return buffer;
  
});

Ember.TEMPLATES["components/editor-tools"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"btn-group btn-group-sm\">\r\n  <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertBold", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-bold\"></i></button>\r\n  <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertItalic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-italic\"></i></button>\r\n  <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertLink", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-link\"></i></button>\r\n  <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertQuote", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-comment-o\"></i></button>\r\n  <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertCode", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-code\"></i></button>\r\n  <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertOrderedlist", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-list-ol\"></i></button>\r\n  <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertUnorderedlist", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-list\"></i></button>\r\n    \r\n  <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertHorizontalrule", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-minus\"></i></button>\r\n  <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertStrikethrough", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-strikethrough\"></i></button>\r\n  <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertSubscript", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-subscript\"></i></button>\r\n  <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertSuperscript", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-superscript\"></i></button>\r\n\r\n  <div class=\"btn-group btn-group-sm\">\r\n    <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\r\n      <i class=\"fa fa-header\"></i>\r\n      <span class=\"caret\"></span>\r\n    </button>\r\n    <ul class=\"dropdown-menu\" role=\"menu\">\r\n      <li role=\"presentation\"><a href=\"\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertHeading1", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">H1</a></li>\r\n      <li role=\"presentation\"><a href=\"\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertHeading2", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">H2</a></li>\r\n      <li role=\"presentation\"><a href=\"\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertHeading3", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">H3</a></li>\r\n    </ul>\r\n  </div>\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["components/flag-comment"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\r\n    <button class=\"btn btn-danger\" title=\"This comment's been flagged\" disabled=\"disabled\"><i class=\"fa fa-flag-o\"></i></button>\r\n");
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n    <button class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "flagComment", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" title=\"Flag this comment\"><i class=\"fa fa-flag-o\"></i></button>\r\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "isFlagged", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
  
});

Ember.TEMPLATES["components/gravatar-image"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("notReply:media-object"),
    'src': ("gravatarUrl")
  },hashTypes:{'class': "STRING",'src': "ID"},hashContexts:{'class': depth0,'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  return buffer;
  
});

Ember.TEMPLATES["components/infinite-scroll"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\r\n<div class=\"panel panel-default\">\r\n  <div class=\"panel-body text-center\">\r\n    <i class=\"fa fa-circle-o-notch fa-spin fa-2x\"></i>\r\n  </div>\r\n</div>\r\n");
  }

  stack1 = helpers['if'].call(depth0, "loadingMoreTopics", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["components/manage-editor"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n	<button type=\"button\" class=\"btn btn-danger btn-xs\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelCmt", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Cancel</button>\r\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n  <button type=\"button\" class=\"btn btn-primary btn-xs\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "hideCmtBox", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\r\n  	Hide <i class=\"fa fa-chevron-up\"></i>\r\n  </button>\r\n");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n  <div class=\"addCommentDiv\" style=\"padding:1%;cursor:pointer;text-align:center;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showCmtBox", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\r\n    Show <i class=\"fa fa-chevron-down\"></i>\r\n  </div>\r\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "isCanceling", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n");
  stack1 = helpers['if'].call(depth0, "isHiding", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n");
  stack1 = helpers['if'].call(depth0, "isShowing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["components/time-ago"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1;


  stack1 = helpers._triageMustache.call(depth0, "timeAgo", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});