import Mock from 'mockjs'

export const tree = Mock.mock({
    // 属性 data 的值是一个数组, 包含的元素为树形结构第一级节点
    'data|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'name': '@cname',
        'children|1-10': [{
            'id|+1': 11,
            'name': '@cname',
            'children|1-10': [{
                'id|+1': 11,
                'name': '@cname',
                'children|1-10': [{
                    'id|+1': 11,
                    'name': '@cname',
                    'children|1-10': [{
                        'id|+1': 11,
                        'name': '@cname',
                        'children|1-10': [{
                            'id|+1': 11,
                            'name': '@cname',
                        }]
                    }]
                }]
            }]
        }]
    }]
})