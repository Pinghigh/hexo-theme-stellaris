module.exports = function NavBarListPost(props) {
    const { site, page, config, theme } = props;
    const { is_home, is_archive, url_for, full_url_for, __ } = props;
    return (
        <div className="nav-wrap">
            <nav className="sub post cap">

                <a className={is_home() ? "active" : ""} href={url_for(config.index_generator.path)}>
                    {__("btn.recent_publish")}
                </a>

                {(() => {
                    if (site.categories && site.categories.length > 0) {
                        if (page.category) {
                            return (
                                <a
                                    className="active"
                                    href={url_for(config.category_dir)}>
                                    {__("btn.category") +
                                        __("symbol.colon") +
                                        page.category}
                                </a>
                            );
                        } else {
                            return (
                                <a
                                    className={
                                        page.layout === "categories"
                                            ? "active"
                                            : ""
                                    }
                                    href={url_for(config.category_dir)}>
                                    {__("btn.categories")}
                                </a>
                            );
                        }
                    }
                })()}

                {(() => {
                    if (site.tags && site.tags.length > 0) {
                        if (page.tag) {
                            return (
                                <a
                                    className="active"
                                    href={url_for(config.tag_dir)}>
                                    {__("btn.tag") +
                                        __("symbol.colon") +
                                        page.tag}
                                </a>
                            );
                        } else {
                            return (
                                <a
                                    className={
                                        page.layout === "tags" ? "active" : ""
                                    }
                                    href={url_for(config.tag_dir)}>
                                    {__("btn.tags")}
                                </a>
                            );
                        }
                    }
                })()}

                <a
                    className={is_archive() ? "active" : ""}
                    href={url_for(config.archive_dir)}>
                    {__("btn.archives")}
                </a>

                {(() => {
                    const elements = [];
                    if (theme["post-index"]) {
                        const postIndex = theme["post-index"];
                        for (let key of Object.keys(postIndex)) {
                            elements.push(
                                <a
                                    className={
                                        full_url_for(page.path).startsWith(
                                            full_url_for(obj[key])
                                        )
                                            ? "active"
                                            : ""
                                    }
                                    href={url_for(postIndex[key])}>
                                    key={key}
                                    {key}
                                </a>
                            );
                        }
                    }
                    return elements;
                })()}

                <a
                    href="https://www.travellings.cn/go.html"
                    target="_blank"
                    rel="noopener"
                    title="开往-友链接力"
                    style={{ display: "flex" }}>
                    <img
                        src="https://www.travellings.cn/assets/travelling.png"
                        alt="开往-友链接力"
                        style={{ width: "2em", height: "2em" }}
                    />
                </a>
            </nav>
        </div>
    );
};
