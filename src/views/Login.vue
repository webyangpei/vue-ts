<template>
  <div class="login-container">
    <div class="lf-form" @keyup.enter="submitLoginForm">
      <el-form :model="loginForm" :rules="loginRules" ref="loginForm" size="large" label-width="80px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username" clearable placeholder="用户名/邮箱/手机号"></el-input>
        </el-form-item>
        <el-form-item label="登录密码" prop="password">
          <el-input v-model="loginForm.password" type="password" clearable placeholder="请输入密码"
                    maxlength="20"></el-input>
        </el-form-item>
        <el-form-item prop="captcha" class="img-code">
          <span slot="label">验&ensp;证&ensp;码</span>
          <el-input v-model="loginForm.captcha" clearable placeholder="验证码" maxlength="4">
            <template slot="append">
              <img :src="validcodeImg" @click="changeValidcode" class="verification-code">
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :loading="loading" @click="submitLoginForm" class="login-btn">确认登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

// 定义表单对象接口
interface LoginFrom {
  username: string;
  password: string;
  captcha: string;
}

@Component({})
export default class Layout extends Vue {
  // 定义表单内容
  private loginForm: LoginFrom = {
    username: '',
    password: '',
    captcha: ''
  };

  // 定义表单规则
  private loginRules: any = {};

  // 是否是正在加载中
  private loading: boolean = false;

  // 图片验证码地址
  private validcodeImg: string = '';

  /** 更换图片验证码 */
  private changeValidcode() {
    // this.validcodeImg = API_Common.getValidateCodeUrl('LOGIN', this.uuid)
  }

  /** 提交登录表单 */
  private submitLoginForm() {
    (this.$refs['loginForm'] as HTMLFormElement).validate((valid: boolean) => {
      if (valid) {
        this.loading = true;
        this.$store.dispatch('loginAction', this.loginForm).then((res: any) => {
          this.loading = false;
          this.$router.push({path: '/'});
        }).catch(() => {
          this.loading = false;
          this.changeValidcode();
        });
      } else {
        this.$message.error('表单填写有误，请核对！');
      }
    });
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
.login-container {
  width: 100%;
  height 100vh;
  background: url(../assets/images/backgroud-login.png) no-repeat;
  background-size: 100% 100%;
  display flex
  flex-direction column
  justify-content center

  .lf-form {
    width 400px;
    margin 0 auto;
    padding 20px
    border 1px solid #ddd
    border-radius 4px
    background #fff
  }
}
</style>
