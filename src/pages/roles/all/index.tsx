import { Card, Alert, Descriptions, Button, Divider } from 'antd';
import Permission from '@/components/Permission';

function App() {
  return (
    // <div className='layout-main-conent'>
    //   <Card>
    //     <Alert message='此栏目为权限功能做演示！' type='warning'></Alert>

    //     <Descriptions
    //       title='以下有三个账号,密码：123456，你可以登录不同的账号查看此栏目下的区别：'
    //       layout='vertical'
    //       size='small'
    //       bordered
    //       style={{ marginTop: '20px' }}
    //     >
    //       <Descriptions.Item label='admin'> 超级管理员（拥有所有权限）</Descriptions.Item>
    //       <Descriptions.Item label='user'>临时用户账号</Descriptions.Item>
    //       <Descriptions.Item label='test'>临时测试账号</Descriptions.Item>
    //     </Descriptions>

    //     <Alert
    //       message='注意：退出账号后登录其他账号，请刷新在查看效果。'
    //       type='error'
    //       style={{ marginTop: '20px' }}
    //     ></Alert>

    //     <Descriptions
    //       title='此页面所有用户都可以查看，以下只做操作按钮权限演示，页面权限请登录不同账号查看左侧栏目对应菜单区别。'
    //       layout='vertical'
    //       size='small'
    //       bordered
    //       column={1}
    //       style={{ marginTop: '20px' }}
    //     >
    //       <Descriptions.Item label='不做验证的操作按钮'>
    //         <Button type='primary'>编辑</Button>
    //         <Button type='primary' danger>
    //           删除
    //         </Button>
    //       </Descriptions.Item>
    //       <Divider>
    //         <h3>Permission 组件使用方法：</h3>
    //       </Divider>
    //       <Descriptions.Item label='user账号可操作按钮'>
    //         <Permission role='user' noNode={<>无权操作，此参数可赋值为空！</>}>
    //           <Button type='primary'>编辑</Button>
    //           <Button type='primary' danger>
    //             删除
    //           </Button>
    //         </Permission>
    //       </Descriptions.Item>
    //       <Descriptions.Item label='test账号可操作按钮'>
    //         <Permission role='test' noNode={<>无权操作，此参数可赋值为空！</>}>
    //           <Button type='primary'>编辑</Button>
    //           <Button type='primary' danger>
    //             删除
    //           </Button>
    //         </Permission>
    //       </Descriptions.Item>
    //     </Descriptions>
    //   </Card>
    // </div>
    <div className='layout-main-conent'>
      <Card>
        <Alert message='Cột này thể hiện chức năng cho phép!' type='warning'></Alert>

        <Descriptions
          title='Có ba tài khoản bên dưới, mật khẩu: 123456, bạn có thể đăng nhập vào các tài khoản khác nhau để kiểm tra sự khác biệt dưới cột này:'
          layout='vertical'
          size='small'
          bordered
          style={{ marginTop: '20px' }}
        >
          <Descriptions.Item label='admin'> Quản trị viên cấp cao (với tất cả các quyền)</Descriptions.Item>
          <Descriptions.Item label='user'>tài khoản người dùng tạm thời</Descriptions.Item>
          <Descriptions.Item label='test'>Tài khoản thử nghiệm tạm thời</Descriptions.Item>
        </Descriptions>

        <Alert
          message='Lưu ý: Sau khi đăng xuất tài khoản, đăng nhập tài khoản khác, vui lòng refresh để xem hiệu ứng.'
          type='error'
          style={{ marginTop: '20px' }}
        ></Alert>

        <Descriptions
          title='Tất cả người dùng trên trang này đều có thể xem nó. Phần dưới đây chỉ minh họa quyền của nút thao tác. Đối với quyền của trang, vui lòng đăng nhập vào các tài khoản khác nhau để kiểm tra sự khác biệt trong các menu tương ứng ở cột bên trái.'
          layout='vertical'
          size='small'
          bordered
          column={1}
          style={{ marginTop: '20px' }}
        >
          <Descriptions.Item label='Nút hành động không cần xác minh'>
            <Button type='primary'>chỉnh sửa</Button>
            <Button type='primary' danger>
              xóa bỏ
            </Button>
          </Descriptions.Item>
          <Divider>
            <h3>Permission Cách sử dụng linh kiện:</h3>
          </Divider>
          <Descriptions.Item label='userNút thao tác tài khoản'>
            <Permission role='user' noNode={<>Không có quyền hoạt động, tham số này có thể được gán giá trị rỗng!</>}>
              <Button type='primary'>chỉnh sửa</Button>
              <Button type='primary' danger>
                xóa bỏ
              </Button>
            </Permission>
          </Descriptions.Item>
          <Descriptions.Item label='testNút thao tác tài khoản'>
            <Permission role='test' noNode={<>Không có quyền hoạt động, tham số này có thể được gán giá trị rỗng!</>}>
              <Button type='primary'>chỉnh sửa</Button>
              <Button type='primary' danger>
                xóa bỏ
              </Button>
            </Permission>
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
}

export default App;
