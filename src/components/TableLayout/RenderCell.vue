<script lang="ts">
    import {Prop, Vue} from 'vue-property-decorator';

    export default class RenderCell extends Vue {
        @Prop(Object)
        private row: object | undefined;

        @Prop(String)
        private prop: string | undefined;

        @Prop(Function)
        private renderCell: any;

        private render(h: any, ctx: any) {
            return ctx.props.renderCell(h, ctx.props.row, ctx.props.prop);
        }
    }
</script>