import React, { useEffect, useState } from 'react';
import { Card, Table } from 'antd';
import { ColumnsType, TablePaginationConfig } from 'antd/lib/table';

import { useI18n } from '@/hooks/useI18n';
import locales from '../../locales';

import { TableListItem } from './data.d';
import { PaginationConfig } from '../../data';

import styles from '../../index.module.less';

import { ResponseData } from '@/utils/request';
import { hotTagsQueryList } from '../../service';
import { useAppSelector } from '@/store/index';

const initPagination = {
  total: 0,
  current: 1,
  pageSize: 5,
  showSizeChanger: false,
};

const HotTagsCard: React.FC = () => {
  const t = useI18n(locales);

  const [loading, setLoading] = useState<boolean>(false);
  const [list, setList] = useState<TableListItem[]>([]);
  const [pagination, setPagination] = useState<PaginationConfig>({
    ...initPagination,
  });

  const getList = async (current: number) => {
    setLoading(true);
    try {
      const response: ResponseData<{ list: TableListItem[]; total: number }> = await hotTagsQueryList({
        per: pagination.pageSize,
        page: current,
      });
      const { data } = response;
      setList(data?.list || []);
      setPagination({
        ...initPagination,
        current,
        total: data?.total || 0,
      });
    } catch (error: any) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getList(1);
  }, []);

  const columns: ColumnsType<TableListItem> = [
    {
      title: t('page.home.hottagscard.card.table-column-number'),
      dataIndex: 'index',
      width: 80,
      render: (_, record, index) => <>{(pagination.current - 1) * pagination.pageSize + index + 1}</>,
    },
    {
      title: t('page.home.hottagscard.card.table-column-name'),
      dataIndex: 'name',
    },
    {
      title: t('page.home.hottagscard.card.table-column-hit'),
      dataIndex: 'hit',
    },
  ];

  return (
    <Card className={styles.homeBoxCard} title={t('page.home.hottagscard.card-title')}>
      <Table
        size='small'
        rowKey='id'
        columns={columns}
        dataSource={list}
        loading={loading}
        pagination={pagination}
        onChange={(p: TablePaginationConfig) => {
          getList(p.current || 1);
        }}
      />
    </Card>
  );
};

export default HotTagsCard;