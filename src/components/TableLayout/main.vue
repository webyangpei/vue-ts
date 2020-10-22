<template>
	<div class="container">
		<div v-if="toolbar" class="toolbar">
			<slot name="toolbar"></slot>
		</div>
		<el-table
			v-bind="$attrs"
			v-on="$listeners"
			stripe
			:header-cell-style="{ textAlign: 'left', backgroundColor: '#fafafa', color: '#909399', fontSize: '14px' }"
			:style="{width: '100%'}"
		>
			<el-table-column type="index" v-if="showIndex && columns.length" :label="indexLabel"></el-table-column>
			<el-table-column
				v-for="item in columns"
				:min-width="item.minWidth"
				:key="item.prop"
				:fixed="item.fixed"
				:sortable="item.sortable"
				:show-overflow-tooltip="item.showOverflowTooltip"
				:label="item.label"
				:prop="item.prop"
				:render-header="item.renderHeader"
			>
				<template slot-scope="{ row }">
					<render-cell v-if="item.renderCell" :row="row" :prop="item.prop" :render="item.renderCell"></render-cell>
					<span v-else>{{ item.formatter ? item.formatter(row, row[item.prop]) : row[item.prop] }}</span>
				</template>
			</el-table-column>
			<template slot="empty" v-if="isEmpty">
				<slot name="empty"></slot>
			</template>
		</el-table>
		<div v-if="pagination" class="pagination">
			<el-pagination
				layout="sizes, prev, pager, next"
				:page-sizes="[10, 20, 50, 100]"
				:total="total"
				:current-page="pageNum"
				:page-size="pageSize"
				@size-change="handlePageSizeChange"
				@current-change="handlePageCurrentChange"
			></el-pagination>
		</div>
	</div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import renderCell from './RenderCell.vue';

    @Component({
        components: {
            [renderCell.name]: renderCell
        }
    })
    export default class TableLayout extends Vue {
        // 是否显示工具栏
        @Prop(Boolean)
        private toolbar: boolean = false;

        // 是否显示分页
        @Prop(Boolean)
        private pagination: boolean = true;

        // 是否显示empty
        @Prop(Boolean)
        private isEmpty: boolean = false;

        // 当前分页数
        @Prop(Number)
        private pageSize: number = 10;

        // 当前页
        @Prop(Number)
        private pageNum: number = 1;

        // 总条数
        @Prop(Number)
        private total: number = 1;

        // 加载状态
        @Prop(Boolean)
        private loading: boolean = false;

        // 列配置
        @Prop(Array)
        private columns: any[] = [];

        // 是否显示序列号
        @Prop(Boolean)
        private showIndex: boolean = false;

        // 序列号label
        @Prop(String)
        private indexLabel: string = '排序';

        private handlePageCurrentChange(page: number): void {
            this.$emit('current-change', page);
        }

        private handlePageSizeChange(size: number): void {
            this.$emit('size-change', size);
        }
    }
</script>

<style lang="stylus" type="text/stylus" scoped>
	.container {
		position: relative;
		background-color: #fff;
		border-radius: 2px;
		box-sizing: border-box;
	}

	/deep/ .el-table td {
		padding: 7px 0;
	}

	/** 工具栏样式 */
	.toolbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #e6ebf5;
		background-color: #fff;
		padding: 12px 0;
	}

	/** 分页样式 */
	.pagination {
		width: 100%;
		margin-top: 24px;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		background-color: #fff;
		padding: 5px 0;
	}
</style>




